<h1 align="center">
    <img alt="Be the hero" title="#be-the-hero" src="./frontend/src/assets/logo.svg" />
</h1>

<h1 align="center">
   🦸 <a href="#"> Be the hero </a>
</h1>

<h3 align="center">
Be The Hero connects heroes who are willing to help NGO
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/arubesu/be-the-hero">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/arubesu/be-the-hero">

  <a href="https://github.com/arubesu/be-the-hero/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/arubesu/be-the-hero">
  </a>
    <img alt="Status" src="https://img.shields.io/badge/Status-Finished-green">
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>


<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#layout">Layout</a> • 
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#contributors">Contributors</a> • 
 <a href="#author">Author</a> • 
 <a href="#user-content-license">License</a>

</p>


## About

🦸 Be the hero - is a way to connect real heroes who want to contribute to NGO projects.
Project developed during  NLW - Next Level Week  offered by [Rocketseat](https://blog.rocketseat.com.br/). NLW is an online experience with lots of practical content, challenges and hacks where the content is available for a week.

---

## Features

- [x] NGOs can register on the web platform by sending:
   - [x] entity name, email, city, state and whatsapp
   - [x] Register an incident with the specified information:
     - title of the incident
     - description of what happened and why they need help
     - the value that they need for the incident
   - [x] Remove an incident

- [x] Users have access to the mobile application, where they can:
   - [x] search see the registered institutions
   - [x] contact the entity via E-mail or WhatsApp

---

## Layout

The application layout is available on Figma:

<a href="https://www.figma.com/file/2C2yvw7jsCOGmaNUDftX9n/Be-The-Hero---OmniStack-11?node-id=0%3A1">
  <img alt="Figma Layout" src="https://img.shields.io/badge/Layout%20-Figma-%2304D361">
</a>


### Mobile

<p align="center">
  <img alt="Ecoleta" title="#Ecoleta" src="./assets/home-mobile.png" width="200px">

  <img alt="Ecoleta" title="#Ecoleta" src="./assets/detalhes-mobile.svg" width="200px">
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
 <img  alt="Home Page"  title="#HomePage"  src="https://raw.githubusercontent.com/arubesu/be-the-hero/main/screenshots/web-home-page.png"  width="400px">

 <img  alt="Register Page"  title="#RegisterPage"  src="https://raw.githubusercontent.com/arubesu/be-the-hero/main/screenshots/web-register-page.png"  width="400px">


 <img  alt="New Incidents Page"  title="#NewIncidentsPage"  src="https://raw.githubusercontent.com/arubesu/be-the-hero/main/screenshots/web-incidents-new-page.png"  width="400px">


 <img  alt="Profile Page"  title="#ProfilePage"  src="https://raw.githubusercontent.com/arubesu/be-the-hero/main/screenshots/web-profile.png"  width="400px">

 

---

## How it works

This project is divided into three parts:
1. Backend (server folder)
2. Frontend (web folder)
3. Mobile (mobile folder)

Both Frontend and Mobile need the Backend to be running to work.

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running Backend (server)

```bash

# Clone this repository
$ git clone git@github.com:arubesu/be-the-hero.git

# Access the project folder cmd/terminal
$ cd be-the-hero

# go to the server folder
$ cd backend

# install the dependencies
$ npm install

# setup environment - rename .env.example to .env 
$ mv .env.example .env

#create postgres docker image

$ docker run --name be-the-hero -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=my_user -p 5432:5432 -d postgres

# Run the application in development mode
$ npm run dev

# The server will start at port: 3333 - go to http://localhost:3333

```
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Be%20the%20Hero&uri=https%3A%2F%2Fgithub.com%2Farubesu%2Fbe-the-hero%2Fblob%2Fmain%2Fbackend%2FInsomnia.json)


#### Running the web application (Frontend)

```bash

# Clone this repository ( you can skip this step if you have already cloned the repo in the previous section)

$ git clone git@github.com:arubesu/be-the-hero.git

# Access the project folder cmd/terminal
$ cd be-the-hero

# Go to the Front End application folder
$ cd frontend

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm  start

# The application will open on the port: 3000 - go to http://localhost:3000

```

---

#### Running the mobile application (Mobile)

Install the expo go app on your smartphone

```bash

# Clone this repository ( you can skip this step if you have already cloned the repo in the previous section)

$ git clone git@github.com:arubesu/be-the-hero.git

# Access the project folder cmd/terminal
$ cd be-the-hero

# Go to the Front End application folder
$ cd mobile

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm start

# The application will open on the port: 19002 - go to http://localhost:19002/

```
Scan the QR code and the application will start 

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Website**  ([React](https://reactjs.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**

> See the file  [package.json](https://github.com/arubesu/be-the-hero/blob/master/frontend/package.json)

#### **Server**  ([NodeJS](https://nodejs.org/en/)  )

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[JSON web token](https://github.com/auth0/node-jsonwebtoken)**
-   **[Sequelize](https://sequelize.org/)**
-   **[Celebrate](https://github.com/arb/celebrate)**

> See the file  [package.json](https://github.com/arubesu/be-the-hero/blob/master/backend/package.json)

#### **Mobile**  ([React Native](http://www.reactnative.com/) )

-   **[Expo](https://expo.io/)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[Expo Constants](https://docs.expo.io/versions/latest/sdk/constants/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)**

> See the file  [package.json](https://github.com/arubesu/be-the-hero/blob/master/mobile/package.json)

#### **Utilitários**

-   Prototype:  **[Figma](https://www.figma.com/)**  →  **[Layout (Be the Hero)](https://www.figma.com/file/2C2yvw7jsCOGmaNUDftX9n/Be-The-Hero---OmniStack-11?node-id=0:1)**
-   API Test:  **[Insomnia](https://insomnia.rest/)**
---
## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m" feature: My new feature "`
4. Submit your changes: `git push origin my-feature`
> If you have any questions check this [guide on how to contribute](./CONTRIBUTING.md)

---

## Author

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/29710382?v=4" width="100px;" alt="Bruno Souza"/>
 <br />

 [![Linkedin Badge](https://img.shields.io/badge/-Bruno_Souza-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruno-a-souza/)](https://www.linkedin.com/in/bruno-a-souza/) 
---

## License

This project is under the license [MIT](./LICENSE).

Made with <3  by Bruno Souza 👋🏽 [Get in Touch!](https://www.linkedin.com/in/bruno-a-souza/)
