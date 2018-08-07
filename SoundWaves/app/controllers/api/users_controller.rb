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
    logout!
    redirect_to new_session_url # TODO make sure this is the correct session_url
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
