class Api::CommentsController < ApplicationController
  def index
    key = params[:comment_params].keys.first
    value = params[:comment_params].values.first
    @comments = Comment.where(key => value)
    if @comments
      @users = @comments.map{ |comment| comment.author }.uniq
      @tracks = @comments.map{ |comment| comment.track }.uniq
      render :index
    else
      render json: ['Comments not found'], status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment, status: 200
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if logged_in &&
      @comment.author_id == current_user.id &&
      @comment.update_attributes(comment_params)
      render json: @comment, status: 200
    elsif !logged_in || @comment.author_id != current_user.id
      render json: ['You do not have permissiion to edit this track'], status: 401
    else
      render json: @comment.errors.full_messages, status: 500
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if logged_in && @comment.author_id == current_user.id
      @comment.delete
      render json: @comment.id, status: 200
    elsif !logged_in || @comment.author_id != current_user.id
      render json: ['You do not have permissiion to delete this track'], status: 401
    else
      render json: ['Something went wrong...'], status: 500
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :author_id, :track_id)
  end
end
