require 'sinatra'
require_relative 'wishlist_item'

$budget = 2250

$wishlist_elements = [
  WishlistItem.new('Auriculares', 200),
  WishlistItem.new('Computadora', 400)
]

get '/' do
  @wishlist_elements = $wishlist_elements
  erb :index
end


post '/add' do
  $wishlist_elements << WishlistItem.new(params["name"] , params["cost"], false)
  redirect '/'
end

get '/optimize' do
  $wishlist_elements = $wishlist_elements.sort { |a,b| a.cost.to_i <=> b.cost.to_i }
  @acc = 0
  $wishlist_elements.each do |a|
    @acc += a.cost.to_i
    if @acc <= $budget
      a.checked = true
    end
  end
  redirect '/'
end
