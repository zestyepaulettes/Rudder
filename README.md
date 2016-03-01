<!-- README: General Information

The “General Information” section should give a new developer an idea of what the project is about and who is involved with it.

Information you might want to include is:

The name of the project
The name and contact details of the client and any 3rd party vendors
The names of the developers on the project
A brief description of the project, you should include the answer to the age-old question “What problem is this project solving?”
An outline of the technologies in the project. e.g.: Framework (Rails/iOS/Android/Gameboy Colour), programming language, database, ORM.
Links to any related projects (e.g.: Is this a Rails API that has corresponding iOS and Android clients?)
Links to online tools related to the application (e.g.: Links to the Basecamp project, a link to the dropbox where all the wireframes are stored, a link to the Pivotal Tracker project)
README: Getting Started

The “Getting Started” section outlines the process of getting the app installed and usable for a developer. I define ‘usable’ in this context as able to login to the application and access all of the functionality available.

Information you might want to include is:

A detailed spin-up process. This should include:
Instructions on installing any software the application is dependent on: e.g.: wkhtmltopdf, PostgreSQL, XQuartz.
Instructions on running the app. For rails apps you’ll want to include the rake db:create db:migrate db:seed process here, as well as instructions on starting a server (e.g. are we using pow, or just the default `rails s`)
A list of credentials that can be used to log in with each user type in the system and ideally the URL that a developer can log in from.
Any information about subdomains in the app (e.g.: api.myapp.dev/)
When writing instructions pretend you’re writing them for someone who knows next to nothing about developing in the framework/language your application uses.

README: Testing

All you need to include in the “Testing” section is the commands to run any of the test suites you have (e.g.: RSpec, Jasmine, Cucumber, Spinach) and any setup you need to do before-hand (e.g.: rake db:test:prepare). This section will be small but vital.

README: Staging and Production environments

The staging and production environment sections (one section per environment) should provide any information a developer might need to know about these environments.

Information you might want to include is:

Which server is the application on? Is it on Amazon Sydney? A server in the office? A data-centre down the road?
How can a developer connect to the server? Do they need particular permissions? Who do they need to talk to to get those permissions?
Where on the server is the application located
What is the deploy process for this server
Are there any other services on the box related to the app a developer will need to know about? Any cron jobs? Some Resque workers? -->

## Rudder app

#### What is Rudder?

Rudder is the middleman between techies and business owners. We recognize the problem that real business owners have when they need a web product but don't know where to go. We aim to match business owners who aren't tech-savvy with the right developer for their product.

We do this by creating a filtering system in which the business owner answers simple, non-technical questions that will route them to the appropriate list of developers in the area. In the process, we educate our users with basic information that answers questions like “Do you need a yelp page?”.

#### Team
Tiffany Thong (Product Owner)
Hamzah Chaudhary (Scrum Master)
Yasu Flores
Arthi Palaniappan


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

#### Testing

Testing is already set up when you 'npm install' using Mocha and Chai modules.
To view the tests, open the 'SpecRunner.html' in your browser.
Write additional tests in 'test/tests.js'.
