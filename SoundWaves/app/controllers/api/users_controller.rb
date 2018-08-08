class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user == current_user
      logout!
      @user.delete
      render json: @user.id, status: 200
    else
      render json: { errors: ['Something went wrong...'] }, status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
