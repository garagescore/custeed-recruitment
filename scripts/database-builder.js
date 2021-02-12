const { MongoClient } = require('mongodb');

require('dotenv').config({ path: '../.env' });
/**
 * Connect and disconnect MongoDB
 */
const connectMongoDB = async () => {
  const mongoClient = new MongoClient(process.env.MONGODB_URI);
  return mongoClient.connect();
};
const closeMongoDBConnection = async (mongoClient) => {
  return mongoClient.close();
};

/**
 * Functions that build collections inside mongoDB
 */
const buildOneCollection = async (mongoClient, data) => {
  try {
    const collection = mongoClient.db().collection('collection');
    await collection.deleteMany({});
    await collection.insertMany(data);
    console.log('Inserted data into the database');
  } catch (err) {
    throw new Error(`Error while inserting data : ${err}`);
  }
};

const main = async () => {
  console.log('Start building our database');
  try {
    var mongoClient = await connectMongoDB();
    await buildOneCollection(mongoClient, data);
    console.log('Successfully built our database, exiting');
    process.exit(0);
  } catch (error) {
    closeMongoDBConnection(mongoClient);
    console.error(error);
    process.exit(42);
  }
};

main();
