json.array!(@activities) do |activity|
  json.extract! activity, :id, :title, :datetime, :place
  json.url activity_url(activity, format: :json)
end
