# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
Topic.destroy_all

sports = Topic.create!(name:"Sports")
politics = Topic.create!(name:"Politics")
nature = Topic.create!(name:"Nature")

p "#{Topic.count} topics were created"

Post.create!(title: 'Footy', topics: [sports])
Post.create!(title: 'yo', topics: [politics])
Post.create!(title: 'hahaha', topics: [politics, sports])

p "#{Post.count} posts were created"