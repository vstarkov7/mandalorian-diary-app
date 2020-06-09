## Mandalorian Diary App

## Description

This app will allow a user to sign up and add entries to their diary. Each entry can have a specific topic or a number of topics, such as Health, Personal, Politics, Work, etc. The user can add new topics to the list of topics to select from. For post MVP, a user will be able to set some entries to public, so that other users can go to their page and view these entries.  

## MVP Goals

For MVP, I want three models - user, entry and topic. The user can sign up and add entries to their diary, selecting a topic for each entry. Each entry will have a title, time and date posted and an entry number associated with it. The user selects from a number of precoded topics, but for post-MVP the user will be able to add new topics to select from. Then they can go to their entries page and scroll through their entries. Each entry can be edited or deleted.

## Post MVP Goals

Allow users to add new topics to choose from.
Allow users to select multiple topics for each entry.
Allow user to click on a post topic and see all posts of that topic.
Allow users to set entries to "public" so that other users can go to their entries page and see these entries. 
Add pagination to the entry pages. 
Add search and filter, so you could search for entries or filter them by date or topic.
Use Material UI instead of regular CSS.

## Wireframes

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

![The ERD Diagram for the app](https://i.imgur.com/kuXtXuL.png)

## Technologies Used

Javascript, REACT.js, RESTful APIs, Ruby on Rails, HTML, CSS (Material UI for post-MVP).

## List of server side routes

For user:

POST /users/ - create a user.

For auth:

POST /auth/login - login to site.

GET /auth/verify - verify the user.

For entries:

GET /users/:user_id/posts - select a user's entries.

GET /users/:user_id/posts/:id - select a particular user's entry.

POST /users/:user_id/posts - create an entry.

PUT /users/:user_id/posts/:id - update an entry.

DELETE /users/:user_id/posts/:id - delete an entry.

For topics: 

GET /topics - select all topics.

GET /topics/:id - select a topic.

PUT /topics/:id - update a topic.

For users and topics:

GET /topics/:topic_id/posts/:id - add topic to user.

GET /topics/posts/:id - find all topics associated with a post.

## Explanation of Major Challenges Expected

I've never built a full-stack app on my own yet, so just using Ruby on Rails to build models and routes and connect them all to each other so they fit well will be a challenge.

Many post-MVP goals I've never done before, so I expect challenges there. I don't know how to implement filter and search the way that I want to. Also, I expect that setting things up so that a user can make their entries public for others to view will be difficult. 

For Material UI, I worked with it a bit for P3, but still don't have enough experience to be confident about it the way that I feel confident about using regular CSS. I expect that I will have to research their docs quite a bit. 

## Timeframes

	| Component | Priority | Estimated Time | Actual Time |
	| --- | :---: |  :---: | :---: | 
	| Setting up Models                 | H | 2hrs|      |
	| Setting up Routes                 | H | 2hrs|      |
	| Setting up Auth                   | H | 2hrs|      |
	| Testing Back End                  | H | 2hrs|      |
	| Starting the React App            | H | 1hrs|      | 
	| Working on the Header.js file     | H | 2hrs|      |
	| Working on the Body.js file       | H | 4hrs|      |
	| Setting up Axios and API          | H | 2hrs|      |
	| Testing React App                 | H | 2hrs|      |
	| Making Everything Pretty with CSS | H | 12 hrs|    |
	| Total                             | H | 31hrs| hrs | 
	 

## Deployed Site



