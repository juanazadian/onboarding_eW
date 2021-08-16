ActiveAdmin.register Purchase do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :delivery, :quantity, :address, :apartment, :date, :start_time, :end_time, :comments, :payment, :user_id, :product_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:delivery, :quantity, :address, :apartment, :date, :start_time, :end_time, :comments, :payment]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

end
