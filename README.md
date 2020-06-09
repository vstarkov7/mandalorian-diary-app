## Mandalorian Diary App

## Description

This app will allow a user to sign up and add posts to their diary. Each post can have a specific topic or a number of topics, such as Health, Personal, Politics, Work, etc. The user can add new topics to the list of topics to select from. For post MVP, a user will be able to set some posts to public, so that other users can go to their page and view these posts.  

## MVP Goals

For MVP, I want three models - user, post and topic. The user can sign up and add posts to their diary, selecting a topic for each post. Each post will have a title, time and date posted and an post number associated with it. The user selects from a number of precoded topics, but for post-MVP the user will be able to add new topics to select from. Then they can go to their posts page and scroll through their posts. Each post can be edited or deleted.

## Post MVP Goals

Allow users to add new topics to choose from.
Allow users to select multiple topics for each post.
Allow user to click on a post topic and see all posts of that topic.
Allow users to set posts to "public" so that other users can go to their posts page and see these posts. 
Add pagination to the post pages. 
Add search and filter, so you could search for posts or filter them by date or topic.
Use Material UI instead of regular CSS.

## Wireframes

Update: decided to switch the name of the "entry" model for the name "post" in production.

The first thing the user sees is the Login screen.
![Login Screen](https://i.imgur.com/YSyZiKf.png)

If the user clicks on the Register link, they will see the following Register screen:
![Register Screen](https://i.imgur.com/msL5TwG.png)

Once the user registers, they can go to the Login screen and log in to the site. They will then see the My Entries page. There users see all the entries they have, with the option to edit or delete any chosen entry.
![My Entries Screen](https://i.imgur.com/ZplW243.png)

If they click on 'New Entry', they will see the following page, where they can fill out a new entry to be added. 
![New Entry Screen](https://i.imgur.com/AjpndVd.png)

If they click on the Topics dropdown, they will see the topics they can choose from. For post MVP, the 'New Topics' link will allow them to go to a page where they can add, edit or delete the topics to choose from.
![New Entry Screen with Topics Dropdown](https://i.imgur.com/tlHQwBJ.png)

Once topics are chosen, this is how they will look.
![New Entry Screen with Topics Chosen](https://i.imgur.com/6PKDzbC.png)

If a user clicks on the Edit link for any of their entries, they will see the Edit Entry Screen.
![Edit Entry Screen](https://i.imgur.com/jKl7AU4.png)

## Component hierarchy

![Component Hierarchy Diagram](https://i.imgur.com/L0VHvfH.jpg)

## ERD

Update: decided to call the "Entry" model "Post" instead in production.

![The ERD Diagram for the app](https://i.imgur.com/kuXtXuL.png)

## Technologies Used

Javascript, REACT.js, RESTful APIs, Ruby on Rails, HTML, CSS (Material UI for post-MVP).

## List of server side routes

For user:

POST /users/ - create a user.

For auth:

POST /auth/login - login to site.

GET /auth/verify - verify the user.

For posts:

GET /users/:user_id/posts - select a user's posts.

GET /users/:user_id/posts/:id - select a particular user's post.

POST /users/:user_id/posts - create an post.

PUT /users/:user_id/posts/:id - update an post.

DELETE /users/:user_id/posts/:id - delete an post.

For topics: 

GET /topics - select all topics.

GET /topics/:id - select a topic.

PUT /topics/:id - update a topic.

For users and topics:

GET /topics/:topic_id/posts/:id - add topic to user.

GET /topics/posts/:id - find all topics associated with a post.

## Explanation of Major Challenges Expected

I've never built a full-stack app on my own yet, so just using Ruby on Rails to build models and routes and connect them all to each other so they fit well will be a challenge.

Many post-MVP goals I've never done before, so I expect challenges there. I don't know how to implement filter and search the way that I want to. Also, I expect that setting things up so that a user can make their posts public for others to view will be difficult. 

For Material UI, I worked with it a bit for P3, but still don't have enough experience to be confident about it the way that I feel confident about using regular CSS. I expect that I will have to research their docs quite a bit. 

## Timeframes

	| Component | Priority | Estimated Time | Actual Time |
	| --- | :---: |  :---: | :---: | 
	| Setting up Models                 | H | 2hrs| 6hrs |
	| Setting up Routes                 | H | 2hrs| 6hrs |
	| Setting up Auth                   | H | 2hrs| 4hrs |
	| Testing Back End                  | H | 2hrs| 6hrs |
	| Starting the React App            | H | 1hrs| 2hrs | 
	| Working on the App.js file        | H | 2hrs| 5hrs |
	| Working on the components         | H | 4hrs| 5hrs |
	| Setting up Axios and API          | H | 2hrs| 4hrs |
	| Testing React App                 | H | 2hrs| 4hrs |
	| Making Everything Pretty with CSS | H | 12 hrs|12hrs |
	| Deployment                        | H | 3 hrs| 5hrs  |
	| Total                             | H | 34hrs| 57hrs  | 
	 

## Deployed Site

Deployed front end on netlify: [https://mandalorian-diary.netlify.app/](https://mandalorian-diary.netlify.app/)
Deployed back end on heroku: [https://mandalorian-diary-app.herokuapp.com](https://mandalorian-diary-app.herokuapp.com)

## Installation 

1. Go to the project root directory.

2. Make sure you are on the master branch and it is up to date.

3. Login to heroku in your CLI.

4. Run: 
heroku create your-app-name-here

5. Run: 
git push heroku master

6. You can open the heroku link you've created by typing in 'heroku open'

7. Get heroku to run your migration file and seed data:
heroku run rails db:migrate
heroku run rails db:seed

8. Set up your secret key and save it:
heroku config:set SECRET_KEY="your-secret-key-here"

9. Go into your client directory.

10. Run a build of the client:
npm run build

11. Login into your netlify account in the CLI.

12. Deploy and check the draft verson of your front-end:
netlify deploy --dir=build

13. Deploy the production version of your client side:
netlify deploy --dir=build --prod

## Helper Functions

	 Function | Description  
	 --- | :---:   
	 loginUser | This will login the user  
	 registerUser | This will register the user  
	 verifyUser | This will verify the logged in user  
	 removeToken | This will remove the auth token to log the user out  
	 readAllTopic | This will get all topics from the database  
	 readOneTopic | This will get a specific topic by id  
	 putPostTopic | This will associate a post with a topic  
	 findPostTopics | This will find all topics associated with a post  
	 readAllPost | This will get all posts from the database  
	 readOnePost | This will get a specific post by id  
	 createPost | This will create a new post  
	 updatePost | This will update the post  
	 destroyPost | This will delete the post 

## Code

I am proud of the following code snippet because, while it may have been a silly sort of mistake, it did take me some time to get this code snippet to work right. Somehow, only one key-value pair was created in the database, either only the title or the content of the post. It took some time to realize I need to use prevState so that I can have more than one key-value pair in the state variable that will be used to send the data to the database.

```
  addPost = async () => {
    const newPost = await createPost(this.state.postFormData, this.state.currentUser.id)
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost],
      postFormData: {
        title: "",
        content: ""
      }
    }))
  }
```
## Issues and Resolution

One issue I had was described above under the Code section.

I had an issue getting all topics associated with a post. While I did not yet find a solution that perfectly satisfies me, I did resolve this issue by creating a custom route and method on the back end to get all topics associated with a post.

I also had issues with a function trying to map a state variable that was undefined. The reason it was undefined was because the API request took longer to update the state variable than it took for the page to load. This was fixed by including logic that produces a "Loading" message while the state variable is null and only maps the state variable when it's been updated with the API request.

I also had an issue with the edit functionality. If I reversed the array of posts that I am mapping (so that the latest post is on top), then when I would try to edit the top post, it would go all the way to the bottom. Did not figure out how to fix that yet (maybe create a separate EditPost.jsx file), so I just left the posts array unreversed (so that the oldest post is on top), that way edit works fine.