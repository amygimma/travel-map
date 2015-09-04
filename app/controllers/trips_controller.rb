class TripsController < ApplicationController
  before_filter :find_trip, only: [:show, :edit, :update, :destroy]

  def index
    @trips = Trip.all
  end

  def new
    @trip = Trip.new
    @trip.locations.build
  end

  def create
    trip = Trip.new(trip_params)
    if trip.save
      redirect_to trip, notice: "Successfully created your trip"
    else
      render :new, alert: trip.errors.full_messages.join(", ")
    end
  end

  def show
  end

  def edit
    @trip.locations.build
  end

  def update
    if @trip.update(trip_params)
      redirect_to @trip, success: "Successfully created your trip"
    else
      render :edit, alert: trip.errors.full_messages.join(", ")
    end
  end

  def destroy
    @trip.destroy
    redirect_to trips_path, alert: "Trip destroyed"
  end

  private

  def trip_params
    params.require(:trip).permit(:title, :summary, locations_attributes: [:id, :name, :latitude, :longitude, :blog_url])
  end

  def find_trip
    @trip = Trip.find(params[:id])
  end
end
