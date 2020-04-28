
//Install express server
const express = require('express');
const path = require('path');

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
    );
    next();
  })
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/build'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/build/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);