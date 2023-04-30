const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/snapiDB', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('MongoDB database connected!');
// });

module.exports = mongoose.connection;