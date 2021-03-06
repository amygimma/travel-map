class Trip < ActiveRecord::Base
  validates :title, presence: true

  has_many :locations, dependent: :destroy
  accepts_nested_attributes_for :locations
end
