/*console.log('hello world')
now we are trying to create an app that runs hello world
so we need express is the package that help you to display data on the browser
require is a key used to display data in a browser...
express.js is frame sued to design web applications for node js.
read operation... using a get request; a browser  requests to read infor from the server...
domain name/url-
......*/

// now we have create/ declared an app with the type express
const express = require("express");
const app = express();
// listen is a key word/ function that takes in the port number(for the serve to
// listen to intructions)& function()....we shall call and create a function at the sametime
app.listen(4000, ()=> {
  // this prinitng out shows that the code is up and listening for something/ running
  console.log("listening on 4000");
});
// we get the declared space called app(name of our app) and write get method which excutes when
//the server is called by the browser. 
app.get("/", (req, res)=> {
// res.send is a response from the server.
  res.send("Hello World");
});

app.get('/about',(req,res)=>{
res.send('this is the about us page');
});

app.post('/',(req, res)=>{
  res.send('Got a POST request')
})
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
});
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
});
app.get('*', (req, res) => {
  res.send('Sorry,Page not found')
});