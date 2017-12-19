var http = require('http');
var path = require('path');

var async = require('async');
var express = require('express');
var app = express();

app.use(require("./payfazz/apiCall.js"))
app.use(require("./sepulsa/crawling.js"))
app.use(require("./tokopedia/crawling.js"))


//
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//

var server = http.createServer(app);


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});