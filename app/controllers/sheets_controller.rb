class SheetsController < ApplicationController
  def index
    @sheets = Sheet.all
  end

  def create
    @sheet = Sheet.create(sheet_params)
  end

  def show
    @sheet = Sheet.find(params[:id])
  end

  def update
    @sheet = Sheet.find(params[:id])
    @sheet.update(sheet_params)
  end

  def destroy
    @sheet = Sheet.find(params[:id])
    @sheet.destroy
  end

  private

  def sheet_params
    params.require(:sheet).permit(:name, :strength, :intelligence, :dexterity, :constitution, :wisdom, :charisma)
  end
end