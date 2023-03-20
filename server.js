const express = require('express');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/snapiDB`;

let db;

mongodb.connect(
    connectionStringURI, 
    {newUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        db = client.db();
        db.collection('snapi').deleteMany([]); //snapi refers to entire db but this might not work since there are multiple models
        db.collection('snapi'.insertMany(data, (err, res) => {
            if(err) {
                return console.log(err);
            }
            console.log(res);
        }));

        app.listen(port, () => {
            console.log(`SNAPI listening at http://localhost:${port}`);
        });
    }
);

app.use(express.json());

//may not actually need this except for testing... probably will want to have /controllers folder with routes
app.get('/all-thoughts', (req, res) => {
    db.collection('snapi')
        .find({ '': { } }) //add desired criteria to pull all thoughts available in db, perhaps sorted by newest or something
        .toArray((err, results) => {
            if(err) throw err;
            res.send(results);
        });
});