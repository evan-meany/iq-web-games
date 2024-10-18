# iq-web-games

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

## Notes on project structure

- Main app logic in app.js
- HTML and CSS are in the public directory within index.html and styles.css respectively