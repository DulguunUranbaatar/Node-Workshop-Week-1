const express = require("express"); // stating using express, since installed to node modules not need to five file path

const hostname = "localhost";
const port = 3000;

const app = express();

app.use((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
}); //middleware func

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname} ${port}/`);
}); //create and server and start listing
