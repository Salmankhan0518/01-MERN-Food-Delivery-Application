const express = require("express");

const app = express();
const port = 5000;

const mongoDB = require("./db");

app.use(express.json());
app.use("/api", require("./routes/createUser.routes.js"));

mongoDB()

  .then(() => {
    app.get("/", (req, res) => {
      res.send("Hello world");
    });

    app.listen(port, () => {
      console.log(`⚙ Server is running at port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!! ", error);
  });
