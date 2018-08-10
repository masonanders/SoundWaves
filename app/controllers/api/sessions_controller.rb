class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render('api/users/show.json.jbuilder')
    else
      render json: 'Invalid username or password!', status: 404
    end
  end

  def destroy
    session_open = logged_in
    result = {message: 'Goodbye'}
    result = 'Already logged out!' unless session_open
    code = session_open ? 200 : 404
    logout!
    render json: result, status: code
  end
end
