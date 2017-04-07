class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_one :collection
  has_many :recommendations
  has_many :reviews
end
