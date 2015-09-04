module Api
  class TripsController < ApplicationController
    def show
      trip = Trip.find(params[:id])
      render json: trip.locations
    end
  end
end
