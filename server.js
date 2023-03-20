const express = require('express');
// const mongoose = require('mongoose');
const db = require('./config/connection');

const app = express();
const port = 3001;

//moved to connection.js but not sure if that's correct...
// mongoose.connect('mongodb://localhost/snapiDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
// );

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('MongoDB database connected!');
// });
// module.exports = db;

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Testing');
// });

app.listen(port, () => {
    console.log(`SNAPI listening at http://localhost:${port}`);
});
