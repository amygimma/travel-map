require "rails_helper"

feature "CRUD Trips" do
  scenario "User creates a new widget" do
    visit new_trip_path

    fill_in "trip_title", with: "Europe Hitchiking"
    fill_in "trip_summary", with: "Hitchiking in Holland, Germany, Austria, Slovenia"
    click_button "Create Trip"

    expect(page).to have_text("Successfully created your trip")
  end
end
