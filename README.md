# StampArt!

![Run](https://i.imgur.com/Vu24Yup.gif)

[React](https://devcode.la/blog/como-funciona-reactjs/)
[Express](https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1)
[MongoDB](https://www.credera.com/blog/technology-insights/java/mongodb-explained-5-minutes-less/)

---

This is an e-commerce application that focuses on the sale of custom hoodies, to facilitate the creation of a unique product for each customer, but at the same time, it facilitates the mass sale of the most popular hoodies, you can make your own designs.
Made with the middle stack, we choose these technologies because they are very popular in the web development sector.

In this project, we had joy, sadness and many learning moments, our emotions are well represented in the image above.

## General Information:

> Find our website deployed in: http://stampart.company/#/
> Read Our Blog Post for the final project on:
> Finally if you want to see more about us, find us on our LinkedIn:
> Jeniffer Pinedo | [![LinkedInIcon](https://i.imgur.com/Jevagtq.png)](https://www.linkedin.com/in/jeniffer-vanegas-pinedo-b76649b9/) |  [![GithubIcon](https://i.imgur.com/A7Oo7A7.png)](https://github.com/jeniffervp)
> Paula Gutierrez | [![LinkedInIcon](https://i.imgur.com/Jevagtq.png)](https://www.linkedin.com/in/paula-andrea-gutierrez-zapata-b77b00167/) | [![GithubIcon](https://i.imgur.com/A7Oo7A7.png)](https://github.com/AndZapata)
> Yesid Gonzalez | [![LinkedInIcon](https://i.imgur.com/Jevagtq.png)](https://www.linkedin.com/in/yesid-augusto-holby/) | [![GithubIcon](https://i.imgur.com/A7Oo7A7.png)](https://github.com/yawzyag)

## Technologies

This application was created with **React**, which is a library written in JavaScript, developed on Facebook to facilitate the creation of interactive and reusable components for user interfaces. It is used on Facebook for component production, and Instagram is written entirely in React. One of its highlights is that it is not only used on the client side, but it can also be represented on the server and work together, after an investigation that we discover is the perfect technology for our Frontend development.

In the Backend we use Express.js, a node.js Framework, our first choice was between pure node.js or using a framework, with express it will take 5-10x less time and lines of code because you don't have to repeat same code over and over again.


## How to use it?

- Make sure you have installed these versions of node (node v12.10.0) and npm (npm 6.10.3)
- Clone the github repository on your computer (the recommended operating system is windows 10)
`git clone https://github.com/yawzyag/StampArt`
- Enter the BackEnd folder, in this folder you can find all the Express development
- once inside, run on the command line `npm i` to install dependencies
- When all are installed, you can run the application with `node app.js`
- You will have a message like the following:
```sh
application listening at the port: 5000!
Connected to the database
```
- You are now running the backend, all endpoints are ready, so now you must return and then enter the FrontEnd folder, in this folder you can find the React development
- once inside, run the compass line `npm i` to install dependencies
- when they finish installing, you can run the application with `npm start`
- The application will start and show you a message like this
```sh
Successfully compiled!
```

Now you can see stampart in the browser.
```sh
Local: http: // localhost: 3000 /
In your network: http://192.168.56.1:3000/
```
- Now you have everything installed and you can try Stampart!

## Usage

Now as you can imagine the process is friendly with the user, so let's try to explain how to use it!

* First at all, you need to Register to the website to manage all the posibilities of **StampArt**: as you can see in the next image you just click on the login button and then click on the register button, fill all the inputs, and submit them. It will create a unique ID for you as a user, and you just need to do this step the first time you are on the website:

![Register](https://i.imgur.com/J15Z1l2.jpg)

* Second step: basically you have to login, it is easier than you can think: click on the login button and fill both of the inputs, email and password, when the input is checked, the platform generates a token, this token is going to change everytime you login, and it's useful for authenticate every next step, then you are going to be redirected to the home page.

![Login](https://i.imgur.com/fRyeDzP.jpg)

* Third step: you choose what you want to do, if you want to see the products and add it to the cart you just press the button Cart, the route Cart will show you the number of items you just added before, when you click on its button, it will show you the image of the items matched, their title, description, how many existence of this items we have and the price, it will generate the general price for all your items after the last item showed.
### Home Products
![Cart0](https://i.imgur.com/9zzZX8n.jpg)
### Cart button
![Cart1](https://i.imgur.com/Ra6CzxR.jpg)
### Cart items
![Cart2](https://i.imgur.com/cRuS5lz.png)

* Also, you can create a Hoodie, and send it to our database, basically go to the dropdown username button, then select the **Create Product** option, upload the image and fill he inputs, then send it. It is easily the way that you can use in our platform for buying or sell your personalized hoodie.
### Create Product Option
![Create1](https://i.imgur.com/75dgoMr.png)
### Create a Product page
![Create2](https://i.imgur.com/2OZfGUT.png)

---
