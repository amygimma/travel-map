class TripsController < ApplicationController
  def index
    @trips = Trip.all
  end

  def new
    @trip = Trip.new
  end

  def create
    trip = Trip.new(trip_params)
    if trip.save
      redirect_to trips_path, notice: "Successfully created your trip"
    else
      render :new, alert: trip.errors.full_messages.join(", ")
    end
  end

  def show
    @trip = Trip.find(params[:id])
  end

  private

  def trip_params
    params.require(:trip).permit(:title, :summary)
  end
end
