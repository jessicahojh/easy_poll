# Easy Poll
Easy Poll is a full stack MERN (MongoDB, Express, React/Redux, NodeJS) web application that allows users to submit a question with two options for other users to vote on.

## Table of Contents
* [Tech Stack](#techstack)<br/>
* [Setup/Installation](#installation)<br/>
* [Demo](#demo)<br/>

<a name="techstack"/></a>
## Tech Stack
**Frontend:** Javascript, React, Redux, React-Bootstrap, HTML, CSS</br>
**Backend:** Node, Express, MongoDB Atlas, Mongoose<br/>
**APIs:** N/A<br/>

<a name="installation"/></a>
## Setup/Installation

On local machine, clone the Easy Poll repository:
```
$ git clone https://github.com/jessicahojh/easy_poll.git
```
In the Easy Poll root directory, install dependencies:
```
$ npm install
```
Then also install dependencies from the package.json file in the client folder:
```
$ cd client
$ npm install
$ cd ..
```

Go to [MongoDB](https://www.mongodb.com/), login or create an account.
  - Follow instructions to build a new cluster.
  - Under Security, click 'Database Access' and follow instructions to add new user.
  - Under Atlas, click 'Clusters'. Under this project cluster, click 'Connect'.<br/>
    Then select 'Connect Your Application'. Copy the "Connection String Only" string provided.

Create a `.env` file in the root directory and save the following in the file:
```
ATLAS_URI=YOUR MONGODB CONNECTION STRING ONLY STRING
```

Run the app:
```
$ npm run dev
```

<a name="demo"/></a>
## Demo
**Homepage:**
<br/><br/>