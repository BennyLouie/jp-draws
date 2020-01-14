This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This project has been released on heroku: https://jpdraws.herokuapp.com/

## Demo: https://youtu.be/iGxIrhS4AY4

## Blog: https://medium.com/@bennylouie/mod-4-project-jp-draws-4e90f14e9f0d

## Tools used

This app is built using Rails [6.0] as a backend to store and retrieve data using a PostgreSQL database. Bcrypt and JWT Auths were utilized to manage secure passwords and user logins.

The frontend uses React JS to improve user interface and incorporates Stripe API to manage money transactions. It is styled using Vanilla CSS.

## Before Starting up this project

Fork and clone from the following repository for the dependant backend 
(follow README for instructions):
https://github.com/BennyLouie/jp-draws-backend

Fork and clone from this repository.

### Then `npm i`

Installs all the dependant modules required to run this React App.

### `node server`

Starts up the node server for the app in order to user Stripe API.

### `npm start`

Starts up this project. Make sure to run the rails backend first. That way you will be prompted to open this app on a different PORT.

### A Brief Summary

Users can sign up and log in to their own account.

Even without signing in, Users can view from a list of 12 artworks. Clicking on an artwork brings up the description of the art as well as the option to add the art to your cart.

If you are logged in, clicking on 'cart' will allow you to input your credit card info to purchase.

If you are not loggin in you will be prompted to log in or sign up.
