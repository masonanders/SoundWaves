class Api::TracksController < ApplicationController
  def show
    @track = Track.find(params[:id])
    if @track
      render :show
    else
      render json: ['Track not found'], status: 404
    end
  end

  def index
    # TODO search by keywords, return index with limit instead of all
    key = all_track_params.keys[0]
    value = all_track_params.values[0]
    @tracks = value == 'all' ? Track.all : Track.where(key => value)
    if @tracks
      render :index, status: 200
    else
      render json: ["No tracks found"], status: 404
    end
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show, status: 200
    else
      render json: @track.errors.full_messages, status: 400
    end
  end


  def update
    @track = Track.find(params[:id])
    if logged_in &&
      @track.artist_id == current_user.id &&
      @track.update_attributes(track_params)
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
      @track.delete
      render json: @track.id, status: 200
    elsif !logged_in || @track.id != current_user.id
      render json: ['You do not have permissiion to delete this track'], status: 401
    else
      render json: ['Something went wrong...'], status: 500
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :artist_id, :description)
  end

  def all_track_params
    params.require(:trackParams).permit(:id, :title, :artist_id, :keywords, :limit)
  end
end
