class SheetsController < ApplicationController
  def index
    @sheets = Sheet.all
    render json: @sheets
  end

  def create
    @sheet = Sheet.create(sheet_params)
    if @sheet.persisted?
      render json: @sheet, status: :created
    else
      render json: { errors: @sheet.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @sheet = Sheet.find(params[:id])
    render json: @sheet
  end

  def update
    @sheet = Sheet.find(params[:id])
    if @sheet.update(sheet_params)
      render json: @sheet
    else
      render json: { errors: @sheet.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @sheet = Sheet.find(params[:id])
    @sheet.destroy
    head :no_content
  end

  private

  def sheet_params
    params.require(:sheet).permit(:name, :strength, :intelligence, :dexterity, :constitution, :wisdom, :charisma)
  end
end