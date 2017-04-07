class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user
end
