class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :collection
  after_create :create_collection

  def create_collection
    current_user = User.last
    collection_name = current_user.username
    self.collection = Collection.create(:name => collection_name)
  end
end
