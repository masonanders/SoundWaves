class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      #TODO redirect to user show with @user
    else
      render json: ['Invalid username or password!']
    end
  end

  def destroy
    session_open = logged_in?
    result = {}
    result.errors = ['Already logged out!'] unless session_open
    code = session_open ? 200 : 404
    logout if session_open
    render json: result, status: code
  end
end
