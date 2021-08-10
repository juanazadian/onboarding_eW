class RegistrationsController < Devise::RegistrationsController
  def create
    super
  end

  def show
    @user = User.find(params[:id])
  end

  private
  # Notice the name of the method
  def sign_up_params
    params.require(:user).permit(:email, :name, :phone_number, :password)
  end
end
