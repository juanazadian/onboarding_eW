class WishlistItem
  attr_accessor :name, :cost, :checked

  def initialize(name, cost, checked = false)
    @name = name
    @cost = cost
    @checked = checked
  end
end
