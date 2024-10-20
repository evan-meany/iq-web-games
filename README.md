# iq-web-games

## How to setup project

- First clone the repo and ensure node.js is installed from here: https://nodejs.org/en
- To setup all the needed modules (as defined in the package.json files) run from root:
```
npm install
```
- To standup the client and server run from root:
```
npm run dev
```

## Notes on creation of project

- First installed node.js from here: https://nodejs.org/en
- Validate installation by running:
``` 
node -v
npm -v
```
- Initialize Node.js project with:
```
npm init
```
- Install Express.js to minimize boilderplate code that needs to be written:
```
npm install express
```
- This  will install modules to the node_modules folder. This should not be added to git as these modules are also defined in the package-lock.json. Other developers should run the following command to initialize modules:
```
npm install
```
- Create a sample web server in a file named app.js
- Run the server using:
```
node app.js
```
- Navigate to http://localhost:3000 to view site
- To avoid having to restart the server everyime can use Nodemon:
```
npm install -g nodemon
nodemon app.js
```
- It is common to use React to handle the front end of websites
- To setup React within the project run this command from root:
```
npx create-react-app client
```
- I moved the server related things into the server folder and the client related things into the client folder
- I added a new package.json at the root that uses npm workspaces to essentially run npm install recursively. To use it run this from root:
```
npm install
```
- To use the client side on the server (or serve it to the server), first the client side needs to be build with:
```
npm run build --prefix client
```
- This command will create build files in the client/build directory
- To run both the server and the client at the same time concurrently should be used:
```
npm install concurrently --save-dev
```
- I added new scripts to the root package.json that will handle standing up client and server. To run the script:
```
npm run dev
```

## Notes on hot reload

- React natively support hot reloading changes made. This means that if changes are made to files they need only be saved whilst the client is running and they will automatically be applied to the website.
- Server side hot reloading is supported through nodemon. The main 'npm run server' script employs nodemon to allow for hot reloading in this way.