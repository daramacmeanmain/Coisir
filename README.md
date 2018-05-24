# Cóisir - A Group Collaboration Application Built Using Ionic 3

## Installation and Configuration

### The following instructions are for launching the application in a web browser only, as the app currently doesn't function correctly when running on a mobile device.

In order to run this application in a  web browser, the following components must be installed. 

* Node.js
* Ionic 3

Node.js can be downloaded [here](http://nodejs.org/), select a version to download and install it. When Node.js is installed, Ionic can be installed using the following command

`$ npm install -g ionic`

Once Ionic is installed, the git repository can be then cloned onto your PC to a directory of your choosing. Once this is complete, perform a `cd` command into the directory where you cloned the repository and then `cd` again into the server directory. Once there run the following command,

`$ node server.js`, to activate the node server. Then in a new command prompt window, navigate to the same directory as before to enter the project-app directory. In there run the following command,

`$ ionic serve`, which will run the application in your browser.

## User Guide

Upon launching the application you are greeted with the Login screen

![login](https://i.imgur.com/OIhkkXq.png)

Here, you can either select "Create an Account" to register with the application, or if you already have an account you can enter your existing credentials and select "Login"

If the former option is chosen, you will be taken to the "New Account" screen. Here you can enter the relevant details and select "Register" to continue.

![account](https://i.imgur.com/Ej95IJs.png)

Once either choosing "Login" or "Register", you will be brought to the Home screen in which all the users posts are displayed. From here you can either create and new post by selecting the "+" in the bottom right corner, or you can log out of the application.

![home](https://i.imgur.com/jloZKL4.png)

Selecting "+" on the home screen brings up an alert where you can enter a new post. Here you can type in the message you want to send and either select "Save" to post it, or "Cancel" to return.
![post](https://i.imgur.com/RAxG86K.png)

Tapping or clicking on a post will bring up the available options for it. You can either edit a post or delete it.
![options](https://i.imgur.com/Cyzc55h.png)

Selecting edit will prompt the user to enter a new string to update the post
![edit](https://i.imgur.com/D86tQUz.png) ![newedit](https://i.imgur.com/C3oSrsx.png)

And selecting delete will remove the post

![delete](https://i.imgur.com/XfzEIbQ.png)

## Demo

A video demo can be found [here](https://www.youtube.com/watch?v=GF2kqOdxK3E).
