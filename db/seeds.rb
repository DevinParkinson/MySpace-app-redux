100.times do
  name = Faker::GameOfThrones.character
  post = Faker::HowIMetYourMother.quote
  age = Faker::Number.between(18, 75)
  occupation = Faker::Job.title
  location = Faker::GameOfThrones.city
  avatar = Faker::Avatar.image(name, "50x50", "png", "set3")
  Myspace.create(name: name, post: post, age: age, occupation: occupation, location: location, avatar: avatar)
end



puts "seeded"
