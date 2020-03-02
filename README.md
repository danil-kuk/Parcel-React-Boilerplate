# Parcel React Boilerplate

## Features
**React**   
This boilerpalte has React 16.13.0 as well as ReactDOM 16.13.0  
**React Router**  
Boilerplate has React Router 5.1.2 installed  
**Parcel**  
Parcel 1.12.4 is used as bundler  
**ESlint**  
ESLint 6.8.0 is included with "eslint-plugin-react". It can be configured inside *.eslintrc* file  
**Babel**  
This boilerplate has preinstalled babel plugins for React  


## Quick start
1. Make sure that you have Node.js v8.15.1 and npm v5 or above installed
2. Clone this repo using command below. Don't forget to set your own <PROJECT_NAME>
```
project_name=<PROJECT_NAME> && git clone --depth=1 --branch=master https://github.com/danil-kuk/Parcel-React-Boilerplate.git ${project_name} && cd ${project_name} && rm -rf .git
```
3. Run `npm run install` in order to install dependencies
4. Now you can run `npm start` to run example app


## Start
```
npm run start
```

## Deploy to GitHub Pages
This boilerplate supports easy one-command deploy to GitHub Pages.  
Before deploy it needs to be **configured**:
1. In *package.json* add your RepoName to "deploy-build" script 
2. In *deploy.sh* add your GitHub UserName and RepoName in "Pushing to gh-pages" section
3. Run `chmod +x deploy.sh` in terminal to allow executing deploy script
4. Done!
Now you can deploy your app to GH Pages with one command:
```
npm run deploy
```

## Lint
```
npm run lint
```
