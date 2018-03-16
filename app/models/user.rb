class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :friends, Array
  
  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Myspace.where("id IN (?)", ids)
  end

  def self.random_myspace(ids)
    ids = ids.empty? ? [0] : ids
    Myspace.where("id NOT IN (?)", ids).order("RANDOM()")
  end
end
