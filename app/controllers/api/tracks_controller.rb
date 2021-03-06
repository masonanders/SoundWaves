class Api::TracksController < ApplicationController
  def show
    @track = Track.find(params[:id])
    if @track
      @user = @track.artist
      @comments = @track.comments
      render :show
    else
      render json: ['Track not found'], status: 404
    end
  end

  def index
    key = all_track_params.keys[0]
    value = all_track_params.values[0]
    limit = params[:limit] || false
    tracks = key == 'all' ? Track.all : search(key, value)
    if tracks
      found = [].concat(tracks).shuffle
      send = (limit ? found.shift(limit.to_i) : found)
      @tracks = send
      @users = @tracks.map { |track| track.artist }
      render :index, status: 200
    else
      render json: ["No tracks found"], status: 404
    end
  end

  def create
    track = Track.new(track_params)
    if track.save
      @track = Track.last
      @user = @track.artist
      render :show, status: 200
    else
      render json: track.errors.full_messages, status: 400
    end
  end


  def update
    @track = Track.find(params[:id])
    if logged_in &&
      @track.artist_id == current_user.id &&
      @track.update_attributes(track_params)
      @user = @track.artist
      render :show, status: 200
    elsif !logged_in || @track.artist_id != current_user.id
      render json: ['You do not have permissiion to edit this track'], status: 401
    else
      render json: @track.errors.full_messages, status: 500
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if logged_in && @track.artist_id == current_user.id
      @track.destroy
      render json: @track.id, status: 200
    elsif !logged_in || @track.artist_id != current_user.id
      render json: ['You do not have permissiion to delete this track'], status: 401
    else
      render json: ['Something went wrong...'], status: 500
    end
  end

  private

  def search(key, value)
    if key == 'search'
      value = '%' + value + '%'
      Track.where('title LIKE ?', value)
    else 
      Track.where(key => value)
    end 
  end

  def track_params
    params.require(:track).permit(:title, :artist_id, :description, :audio)
  end

  def all_track_params
    params.require(:trackParams).permit(:id, :title, :artist_id, :keywords, :limit, :all, :search)
  end
end
