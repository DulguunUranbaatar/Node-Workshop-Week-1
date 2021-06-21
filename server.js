const express = require("express"); // stating using express, since installed to node modules not need to five file path
const morgan = require("morgan");
const campsiteRouter = require("./routes/campsiteRouter");
const promotionRouter = require("./routes/promotionRouter");
const partnerRouter = require("./routes/partnerRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json()); // when server revieces req, it will handle parsin JSON data into JS prop

app.use("/campsites", campsiteRouter);
app.use("/promotions", promotionRouter);
app.use("/partners", partnerRouter);

app.use(express.static(__dirname + "/public")); //serve files static from the public filder

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
}); //middleware func

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); //create and server and start listing

//git init
//git add .
//git commit -m "Name"
