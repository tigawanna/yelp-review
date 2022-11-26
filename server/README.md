# SIMPLE NODEJS EXPRESS SEREVER STARTER


### dependancies

#### Dev dependacies
- typescript : for static typing
- nodenom : for reloading the dev server

#### App dependancies
- express : nodejs server framework
- cors : for handling cors requirements
- body-parser : for parsing incoming json in   request body
- dotenv : to load enviroment variables  


### Scripts:

```js
npm run watch
npm run start
```

Run both in separate terminal instances .
they both need to be running through out the dev process.
watch : will watch for changes in index.js and compele it into dist/index.js
start: will execute code dist/index.js and reload it if it changes using nodemon 

### hosting

there's a Procfile for heroku deployment included .</br>
npm and node js versions which are aso required by heroku also included.</br>
So just create an account with them fork the repo and select it in their console or using their CLI tools to deploy
```js
  "engines": {
    "node": "16.x",
    "npm": "6.x"
  }
```
[More info in the official heroku docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
