## About The Project

- Build Full Stack Application from Scratch with MongoDB, Express, React and NodeJS on Udemy
- Tutorial for Jobify
- https://www.johnsmilga.com/
- https://github.com/john-smilga/mern-course-jobify
- https://course-api.com/ (John Smilga)

## Installation

1. Install NPM packages.

```sh
npm install
```

2. Create .env file in Jobify folder.

```sh
touch .env
```

3.Enter the information in .env file

```env
PORT=4000
MONGO_URL= connection string into your application code from https://www.mongodb.com/atlas/database
JWT_SECRET= use https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx
JWT_LIFETIME=1d
```

&nbsp;

## Notes

- Hard refresh on chrome : Hold down Shift and click the Reload button.
- Links vs Buttons : https://www.digitala11y.com/links-vs-buttons-a-perennial-problem/
- Display Ports in used
  ```sh
  sudo lsof -PiTCP -sTCP:LISTEN
  ```
- bcrypt vs bcrypt<b>js</b> : https://github.com/kelektiv/node.bcrypt.js/wiki/bcrypt-vs-bcrypt.js
- Have 2 package.json structure (1 for frontend (React) and 1 for backend (server))
  - <b>Why:</b> For an easier setup of both frontend and backend. Otherwise, you have to use npm eject to change the path of react script to locate index.js.
  - Switching from monorepo structure:
    - BACKUP exisiting .git folder, package.json and package-lock.json.
    - Use CRA CLI in client folder.
    - Replace content respectively.
    - Regenerate and replace both package.json and package-lock.json (npm i --package-lock-only).
    - Setup script and ES6 Module ("type": "module",) if applicable.
- Browser Fetch API CORS error : https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors
  - <b>Solution:</b> npm i cors or proxy : https://create-react-app.dev/docs/proxying-api-requests-in-development/ <b>(NOT PRODUCTION)</b>
- Fetch API VS Axios : https://stackoverflow.com/questions/40844297/what-is-difference-between-axios-and-fetch
  - https://www.javascriptstuff.com/ajax-libraries/
- Check if there is a need for token array for logging in using multiple devices.
- localStorage : https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
- Postman token setup for Register User and Login User under Tests tab.
  ```js
  const jsonData = pm.response.json();
  pm.globals.set('token', jsonData.token);
  ```
- Prevent hashing of password twice with isModified('password')
  - Also could go with the populate method instead of setting password select field to be false method at the beginning.

```js
UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
```

- Axios : There will be a security issue if sending bearer token using globally. e.g If you make API call to third party, the header will contain the bearer token.
- <b>showStats</b> https://docs.mongodb.com/manual/core/aggregation-pipeline/
- Mockaroo:

  | Field Name  |       Type        |                Options                |
  | :---------: | :---------------: | :-----------------------------------: |
  |   company   | Fake Company Name |                                       |
  |  position   |     Job Title     |                                       |
  | jobLocation |       City        |                                       |
  |   jobType   |    Custom List    | Full-Time,Part-Time,Remote,Internship |
  |   status    |    Custom List    |      Interview,Declined,Pending       |
  |  createdBy  |    Custom List    |       622887511db9d4ad52355cbc        |
  |  createdAt  |     Datetime      |         format: ISO 8601(UTC)         |
  | #Rows: 1000 |   Format: JSON    |    [x]array [] include null values    |

&nbsp;

### Notes taken from Persist User In Local Storage comment section:

> hello John im a little bit curious why you didnt check if the token value exists first before setting the token value to token.example
> is there a reason you didnt check if the token exists??

```js
serInfo: user ? JSON.parse("user") : null,
    token: token,
```

> Because token is a string, if it does not exist, it's just going to be undefined. When it comes to user it's an object, so before parsing it, I want to check whether it exists.

&nbsp;

### Notes taken from Axios Interceptors - Complete comment section:

> Custom authentication + local storage use safe?

> John - your course is fantastic, thank you. One question on authentication: I read so much conflicting information out there. Many people seem to think that local storage is not a safe place to store tokens. And many people also seem to think that authentication is too hard for amateurs to get right and it must be outsourced to Auth0/Firebase/etc. Though you seem to have a very practical and thoughtful approach.

> I'm working on project that I hope will become a real business and would appreciate your input. Is your authentication strategy suitable for this, or only for very small personal projects? I understand there is no final answer so would just appreciate your opinion. Thanks!

&nbsp;

> Very good questions.

> As far as local storage being safe, yes it's a never ending debate. I personally have not had security based issues with local storage. The alternative approach is using cookies (store JWT in the cookie) and eventually I do want to add another project to this course where I cover that (unfortunately have not timelines). I personally prefer cookies but only because it's less work on the front-end (don't need to store/retrieve JWT) and not because of security issues. Few downsides of cookies, size (pretty much can store only JWT) and the front-end needs to be on the same server, so it's very hard to make a public api using cookies. So for example on some apps I use cookies but for my public apis, I use local storage.

> Now, when it comes to Auth Providers, yes if it's a service where you charge people money, if you want to stay on the safe side, I would say go with one of the Auth Providers. For one you will have less liability (especially considering that most people use the same password for everything) and also realistically such companies deal with auth for a living, and as a result their infrastructure, and solutions of course are going to be way more complex.

> What's interesting though, some of the big Auth Providers (for example AUTH0) still send/store JWT in local storage, which leads me to believe that some of this fighting, over which approach is better, is over exaggerated.

&nbsp;

> I circled back to you with my first question because I had tried to install auth0 and personally found there docs to be.. not so great. I'm struggling to complete the installation. For a MERN stack app, is Auth0 your only recommendation or are there others you would recommend as well (Firebase, etc)?

> Firebase is good choice. The reason why I avoid Firebase in the courses, is because it kinda defeats the entire purpose of making your own (MERN) full stack application in the first place.

> So basically you can just use Firebase for everything (data storage, auth, etc). Like I said, actually very good option.
> Now, why I think it's important to learn/teach MERN, because I honestly say that it made me a better front-end developer since now I have a better picture of entire process. Not just front-end part.

> With that said, if it's a production ready app and I don't know whether it's going to be successful or not (essentially, how many users I will have). I seriously would consider Firebase.

&nbsp;

### ES7+ React/Redux/React-Native snippets

- shortcuts
  ```js
  rafce;
  ```
