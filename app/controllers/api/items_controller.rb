class Api::ItemsController < ApplicationController

  def index
    render json: Item.all
  end

  def create
    @item = Iten.new(item_params)

    if @item.save
      render json: @item
    else
      render json: { errors: @item.errors }, statis: :unprocessable_entity
    end
  end

  def update
    @item = Item.find(params[:id])
    @item.update(purchased: !@item.purchased)
    render @item
  end

  def destroy
    Item.find(params[:id]).destroy
    render json: { message: 'Item is deleted' }
  end

  private

  def item_params
    prams.require(:item).permit(:name, :price, :purchased)
  end

end
