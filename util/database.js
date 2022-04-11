const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://santus:sanTUS1845@cluster0.2psdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      callback(client);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

module.exports = mongoConnect;
