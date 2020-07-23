const express = require('express');
const app = express();
const http = require('http').Server(app);
const PORT = process.env.PORT || 8080;

require('dotenv').config();

app.use("/", express.static(__dirname + '/public'))

http.listen(PORT, function () {
    console.log('server listening on *:' + PORT);
});

module.exports = {
    close(callback) {
        http.close(() => console.log("server closed"));
        callback();
    }
}