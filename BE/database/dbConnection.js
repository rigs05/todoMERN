const mongoose = require("mongoose");
const uri =
  "mongodb+srv://rigs:oWhN5N9dV2eFdjaZ@cloudcluster1.kwqxgwm.mongodb.net/todoDB";

const dbConnection = async () => {
  try {
    await mongoose.connect(uri);
    // const db = mongoose.connection;
  } catch (err) {
    console.error(`Unable to connect to Database!\n ${err}`);
  }
};

module.exports = dbConnection;
