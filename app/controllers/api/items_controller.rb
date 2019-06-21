class Api::ItemsController < ApplicationController

  def index
    render json: Item.all
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      render json: @item
    else
      render json: { errors: @item.errors }, statis: :unprocessable_entity
    end
  end

  def update
    @item = Item.find(params[:id])
    # if @item.update(item_params)
    @item.update(complete: !@item.complete)
    render @item
  end

  def destroy
    Item.find(params[:id]).destroy
    render json: { message: 'Item is deleted' }
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :purchased)
  end

end
