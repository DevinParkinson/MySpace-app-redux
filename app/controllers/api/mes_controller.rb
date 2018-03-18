class Api::MesController < ApplicationController
  before_action :set_me, only: [:update, :show, :destroy]

  def index
    render json: Me.all.order(created_at: :desc)
  end

  def update
    render json: @me
  end

  def create
    me = Me.create(me_params)
    if me.save
      render json: me
    else
      render json: { errors: me.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @me.update(me_params)
      render json: @me
    else
      render json: { errors: @me.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @me.destroy
  end

  private
    def set_me
      @me = Me.find(params[:id])
    end

    def me_params
      params.require(:me).permit(:name, :post)
    end
end
