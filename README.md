## Rudder app

#### What is Rudder?

Rudder is the middleman between techies and business owners

#### Front-End Frameworks

* [ReactJS](https://facebook.github.io/react/)


#### Back-End Frameworks

* [NodeJS](https://nodejs.org/)
* [ExpressJS](https://nodejs.org/)

#### GruntFile Explained

In the GruntFile are mainly using 3 tasks:

Grunt **build**, which runs: 

'clean': To delete all the minified and transpiled files, you MUST use clean before commiting or doing a push to your branch

'concat': To concatenate all the react components into one file

'babel': To transpile from ES6 to ES5

'uglify': To minify the concatenated and transpiled react components

'cssmin': To minify the css stylesheet


Grunt **watch**, which runs:

'build': That runs all the previous tasks

'nodemon': Runs the server at server/server.js


#### Instructions to run the project

After forking/cloning this repo, in your terminal:

1. Navigate to the project folder

2. Run 'npm install'

3. Run 'grunt build'

4. Run 'nodemon server/server.js'

