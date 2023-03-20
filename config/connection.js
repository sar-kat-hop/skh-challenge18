const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1.27017/snapiDB', {
    useNewUrlParser: true,
    useUnifiedTopoogy: true,
})

module.exports = mongoose.connection;