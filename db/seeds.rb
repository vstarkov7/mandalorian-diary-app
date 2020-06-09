Topic.destroy_all

sports = Topic.create!(name:"Sports")
politics = Topic.create!(name:"Politics")
nature = Topic.create!(name:"Nature")
science = Topic.create!(name:"Science")
personal = Topic.create!(name:"Personal")
humor = Topic.create!(name:"Humor")
nature = Topic.create!(name:"Nature")
philosophy = Topic.create!(name:"Philosophy")
gaming = Topic.create!(name:"Gaming")
other = Topic.create!(name:"Other")


p "#{Topic.count} topics were created"