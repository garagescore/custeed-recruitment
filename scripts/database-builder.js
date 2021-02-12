const { MongoClient } = require('mongodb');
const { buildPlayerClassesData } = require('./modules/build-player-classes');
const { buildWeaponsData } = require('./modules/build-weapons');
const { buildPlayersData } = require('./modules/build-players');

require('dotenv').config({ path: '.env' });
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

const mustReset = () => process.argv.includes('--reset');

// Reset DB
const flushDB = async (mongoClient, collections) => {
  for (const collection of collections) {
    await mongoClient.db().collection(collection).deleteMany({});
  }
};

/**
 * Functions that build collections inside mongoDB
 */

const buildCollection = async (mongoClient, collectionName, data) => {
  try {
    const collection = mongoClient.db().collection(collectionName);
    await collection.deleteMany({});
    await collection.insertMany(data);
    console.log(`Inserted ${collectionName} into the database`);
  } catch (err) {
    throw new Error(`Error while inserting data : ${err}`);
  }
};

const buildDatabase = async (mongoClient) => {
  // Player classes
  const playerClassesData = buildPlayerClassesData();
  await buildCollection(mongoClient, 'playerClasses', playerClassesData);
  const playerClasses = await mongoClient
    .db()
    .collection('playerClasses')
    .find({}, { projection: { name: true, strength: true, weakness: true } })
    .toArray();

  // Weapons
  const weaponsData = buildWeaponsData();
  await buildCollection(mongoClient, 'weapons', weaponsData);
  const weapons = await mongoClient.db().collection('weapons').find({}, { _id: true }).toArray();

  // Players
  const playersData = buildPlayersData(playerClasses, weapons);
  await buildCollection(mongoClient, 'players', playersData);
};

const main = async () => {
  console.log('Start building our database');
  try {
    var mongoClient = await connectMongoDB();
    if (mustReset()) {
      await flushDB(mongoClient, ['players', 'weapons', 'playerClasses']);
    }
    await buildDatabase(mongoClient);
    console.log('Successfully built our database, exiting');
    process.exit(0);
  } catch (error) {
    closeMongoDBConnection(mongoClient);
    console.error(error);
    process.exit(42);
  }
};

main();
