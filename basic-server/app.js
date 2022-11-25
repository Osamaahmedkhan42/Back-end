var http = require('http');
const connectDB = require('./db/connect');
var hostname = "127.0.0.1";
var port = "3000";

//const MONGO_URI = 'mongodb+srv://django:testing123@cluster0.7ncug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const MONGO_URI = "mongodb://localhost/appdb"

var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

//
const start = async () => {
    try {
      await connectDB(MONGO_URI);
      server.listen(port, hostname, function () {
        console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
    });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();