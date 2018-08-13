class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ['User not found'], status: 404
    end
  end

  def index
    key = all_user_params.keys.first
    value = all_user_params.values.first
    limit = params[:limit] || 1
    users = key == 'all' ? User.all : User.where(key => value)
    if users
      @users = [].concat(users).shuffle.shift(limit.to_i)
      render :index, status: 200
    else
      render json: ["No users found"], status: 404
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show, status: 200
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show, status: 200
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user == current_user
      logout!
      @user.delete
      render json: @user.id, status: 200
    else
      render json: ['Something went wrong...'], status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def all_user_params
    params.require(:userParams).permit(:username, :id, :email, :limit, :all)
  end
end
