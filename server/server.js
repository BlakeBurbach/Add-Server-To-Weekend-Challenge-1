// import express from node_modules
let express = require('express');
//do something before we can run it:
//make the application
let app = express();
const PORT = 5000;
//now need to serve our files
app.use(express.static('server/public'))
// run server
app.listen(PORT, () => {
    console.log('server is running on port 5000');
})
