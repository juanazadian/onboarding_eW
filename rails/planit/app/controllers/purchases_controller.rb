class PurchasesController < ApplicationController
  def index
    @purchases = current_user.purchases if current_user
  end

  def prepurchase
    if current_user
      @quantity = params['quantity']
      @product = params['product']
    else
      redirect_to new_user_session_path
    end
  end

  def done
  end

  def show
  end

  def new
    @purchase = Purchase.new(purchase_params)
    @total = (params['purchase']['quantity']).to_i * @purchase.product.cost.to_i
  end

  def create
    @purchase = Purchase.new(purchase_params)
    @purchase.user_id = current_user.id if user_signed_in?
    @purchase.payment = params['payment']
    if @purchase.save
      render :done
    else
      render :new
    end
  end

  private
  # Notice the name of the method
  def purchase_params
    params.require(:purchase).permit(:delivery, :quantity, :address, :apartment, :date, :start_time, :end_time, :comments, :payment, :product_id)
  end
end
