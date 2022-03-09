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

### ES7+ React/Redux/React-Native snippets

- shortcuts
  ```js
  rafce;
  ```
