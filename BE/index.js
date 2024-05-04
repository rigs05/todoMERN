const express = require("express");
const app = express();
const PORT = 5001;
const dbConnection = require("./database/dbConnection");
const route = require("./routes/route");
const cors = require("cors");

const serverConnection = async () => {
  try {
    await dbConnection();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use(cors());
    app.use(route);
    // app.use(
    //   cors({
    //     option: "http://localhost:5173",
    //   })
    // );

    app.listen(PORT, (err) => {
      if (err) {
        return console.error(
          `Error Occurred while connecting to ${PORT}!\n ${err}`
        );
      }
      console.log(`Server started on port ${PORT}.`);
    });
  } catch (error) {
    console.error(`Internal server error!\n ${error}`);
  }
};

serverConnection();
