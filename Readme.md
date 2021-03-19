<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/cchanche/esp32iot">
    <img src="images/enseeiht.jpeg" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">GreenIT and Eco design Principles</h3>
  <h5 align="center"><i>Clément CHANCHEVRIER</br>Elian EGRETEAU</br>Samuel BOURY</br>Loïc BESSE</i></h4>
</p>

## About

Initiated by _Accenture_, the project was meant to bring to the light how we could design or re-design a webpage in order to reduce it's ecological impact. We achieved it by designing two separate apps : a standard one and an eco-friendly one. For convenience, we called them respectively `hightech` and `lowtech`. We defined a business case that would be as harmfull as possible for the environnement, but also not too fancy. We went for a streaming app like _Netflix_ of _Prime_.

**We do not maintain any of this anymore, if you want to use the code feel free to fork.**

---

# Getting started

If you just want to take a look at our work here is how :

## Installation

In order to run any of the two web sites you need the following installed on your machine :

- NodeJS : follow the [official guide](https://nodejs.org/en/) for your operating system.
- Clone the repository on your machine.

In order to run the `hightech` website, you will need a local (or distant) mongoDB database. [Here is how to install and run mongodb server](https://docs.mongodb.com/manual/installation/) (Choose the MongoDB Community Edition Installation Tutorial referring to your OS & follow the _install_ and _run_ sections).

- Open a terminal in the following locations :
  - `./lowtech` and run `npm i && npm start`
  - `./hightech` and run `npm i && npm run build`
  - `./hightech-server` and run `npm i && npm start`

If everything runs smoothly, you will be able to use the `lowtech` website at [localhost:3000](localhost:3000) and the `hightech` at [localhost:8000](localhost:8000).

# Maintaining

If you want to re-use our code or if you are just curious about more technical insights, here is a quick guide about our delevoppement process.

**Keep in mind we were a team of beginners in web developpement and under time pressure : be indulgent and feel free to ask anything, we might still be around to answer.**

## Lowtech

Our goal here was to match as close as possible a static website. Static pages don't involve any processing power from the server nor the device, which was obviously the goal for an eco-friendly page.

### Server

We went with a NodeJS server (using express) in order to compensate for the lack of front-end javascript we wanted to avoid.

<p align="center">
    <img src="images/lowtech-server.png" alt="Logo" height="200">
</p>

On startup, the server asks the static sources to build themselves once.

```javascript
// server/index.js

const buildPublic = require("../src/build");
```

This builds the `public` folder which contains all _.html_ and _.css_ files to run our website.

In addition, to manage the dynamical side of the homepage, an asynchronous function (`genHtml` specified in `src/index.js`) is called each time the website user asks for a dynamical content (preferences, high font size and contrast mode, search bar & page navigation), to generate the html files according to this request and store them in the `public` folder.

All the homepage dynamic content is implemented and managed thanks to the `<form>` HTML tag. It allows to use GET requests along with parameters which are then recovered in `serveFilm.js`, `serveHome.js` & `serveSearch.js` located in the `server/middlewares/` folder.

Finally, Express simply serves the HTML and CSS files located in the `public` folder.

```javascript
// server/index.js

app.use(express.static("../public"));
```

### Movies

To recover the information on movies, we used the online API _The Movie Database API_ available [here](https://developers.themoviedb.org/3/getting-started/introduction).

To simplify our project (to avoid a database management in particular), we decided not to store the whole movies (video files) available on the api. We only stored a unique movie on the server, which is played each time you click on a play symbol on the homepage.

### Tutorial

## Hightech

Our goal here was to load the browser with a lot of processing work, since end devices have the most ecological impact. A client-side rendering framework was the obvious way to go, and because one of us already had done some apps with ReactJS, this is what we went with.

For the backend, we used express alongside with [mongoose](https://mongoosejs.com/) for our Mongo database and [passport.js](http://www.passportjs.org/) for authentication.

### Frontend

React is actually pretty simple to learn and there are a lot libraries with custom components to help you do complex things. For the rest of this section we'll assume you have basic knowledge of how React works. If it's not the case, [here is a where you need to start](reactjs.org/docs/getting-started.html).

Our `src/App.tsx` file is the entry to the project. Here, we use [`react-router-dom`](https://reactrouter.com/web/) to navigate through our single page app (_SPA_).

```jsx
// src/App.tsx

return (
  <Redirect exact from="/" to="/home" />
  <Route exact path="/home" component={Home} />
  <Route exact path="/tutorial" component={Tutorial} />
  <Route exact path="/profile" component={UserProfile} />
  <Route exact path="/play" component={Player} />
)
```

In order to control wether tu user is authenticated or not, we use a custom [react hook](https://reactjs.org/docs/hooks-intro.html).

```jsx
// src/App.tsx

const { token, setToken } = useToken();

...

return (
  {token ? (
    // home page
  ) : (
    // login or register page
  )}
)
```

Our `useToken` hook is only responsible for fetching the user token from the browser's [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage). API calls to our `/login` or `/register` endpoints are defined in `src/App.tsx` and passed within a [react context](https://reactjs.org/docs/context.html) so that they would be usable anywhere within our components.

Next, you will find the different pages of our app in `src/containers`, and their individual components in `src/components`.

### Backend

Our backend is once again in expressjs, with various middlewares to implement user authentication and database support.

We define a `User` schema for mongoose in `models/Users.js` with its different methods. For instance :

```js
// models/Users.js

UsersSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};
```

This method saves a hashed version of a given `password` to the database.

In `config/passport.js` we define a local strategy for passport to operate, and in `routes` you will find our different endpoints.

Thanks to the express middleware implementation, we are able to create routes only accessible with a valid authentication token. To do that, we define the `auth.required` and `auth.optionnal` object in `routes/auth.js`, and we pass one or the other as an option to our route implementation.

```js
// routes/api/users.js

router.post('/login', auth.optional, (req, res, next) => {
  ...
}
```

Finally we serve statically our frontend build from `./hightech/build` and the whole website now works.
