const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-app';


MongoClient.connect(connectionURL, { useNewUrlParser: true, }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName);

  // db.collection('users').insertOne({
  //   name: 'New User',
  //   age: 25
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user.')
  //   }

  //   console.log(result.ops)
  // });

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Dishes',
  //     completed: false
  //   }, {
  //     description: 'Laundry',
  //     completed: true
  //   },{
  //     description: 'Groceries',
  //     completed: true
  // }], (error, result) => {
  //   if (error) {
  //     return console.log('something went wrong')
  //   }
  //   return console.log(result.ops)
  // });

  // db.collection('users').findOne({ _id: ObjectID('5f58d3fef335afac13eb1a7b') }, (error, user) => {
  //   if (error) {
  //     return console.log('Something went wrong!!!')
  //   }

  //   console.log(user)
  // });

  // console.log(db.collection('tasks').find({ completed: true }).toArray((error, users) => {
  //   if (error) {
  //     return console.log('something went wrong')
  //   }

  //   console.log(users);
  // }));

  // db.collection('users').updateOne({
  //    _id: new ObjectID('5f58d3fef335afac13eb1a7b')
  // }, {
  //   $set: {
  //     name: 'Updated'
  //   }
  // }).then(result => console.log(result))
  //   .catch(error => console.log(error))

  // db.collection('tasks').updateMany({
  //   completed: true
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }).then(result => console.log(result))
  //   .catch(error => console.log(error));

  // db.collection('tasks').deleteOne({
  //   _id: new ObjectID('5f58d3d1f99134abfda8ea56')
  // }).then(result => console.log(result))
  //   .catch(error => console.log(error));

  db.collection('tasks').deleteMany({})
    .then(result => console.log(result))
    .catch(error => console.log(error));
});
