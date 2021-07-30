require 'sinatra'
require 'pg'
require 'pry'
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

post '/organize' do
  @wishlist_for_user = []
  if params["name"]
    begin
      conn = PGconn.open(dbname: 'learn_to_code')
      res  = conn.exec("select items.item_name, items.cost, wishlist.completed
                        from users join (items join wishlist using (itemid)) using (userid)
                        where users.username = '#{params["name"]}';")
      res.each do |row|
        @completed = (row['completed'] == 't')
        puts @completed
        @wishlist_for_user << WishlistItem.new(row['item_name'], row['cost'], @completed)
      end
    rescue PG::Error => e
        puts e.message
    ensure
        res.clear if res
        conn.close if conn
    end
  end
  erb :organize
end
