const mongoose = require('mongoose');

const theFunction = () => {
  const query = {};
  const projection = {};
  const myCollection = mongoose.connections[0].collection('collection');
  return myCollection.find(query, { projection }).toArray();
};

module.exports = theFunction;
