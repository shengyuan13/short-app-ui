# Short-App User interface

This will be a React app that will be used as the web app for the URL shortener API created on: https://github.com/shengyuan13/short-app

## Instruction

The URL shortener API: https://github.com/shengyuan13/short-app, should be running on port 3000.
If the back-end API app is running on a different port, we must change 'REACT_APP_BASE_API_URL' value on the .env file.

The web app for the URL shortener(this React app), will be running on port 3001.

## Initial setup

Have the URL shortener API: https://github.com/shengyuan13/short-app up and running (follow the README)

To Start this app run:

    npm i

    PORT=3001 npm start

## Functionalities

* View of TOP 100 most frequently accessed URLs.
* Form for inputting URLs into the system.
* Inputting a valid URL should result in displaying the new shortened URL to the user.
* Inputting an invalid URL should result in displaying errors to the user.