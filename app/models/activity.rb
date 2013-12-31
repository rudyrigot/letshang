class Activity
  include Mongoid::Document
  field :title, type: String
  field :datetime, type: DateTime
  field :place, type: String
end
