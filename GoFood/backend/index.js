const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

console.log("DIR:", __dirname);
console.log("ENV TEST:", process.env.MONGO_URI);
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;
const mongoDB = require("./db");

console.log("ENV CHECK:", process.env.MONGO_URI);

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


app.options("*", cors());


app.use(express.json());


app.use("/api", require("./routes/createUser.routes.js"));
app.use("/api", require("./routes/DisplayData"));
app.use("/api/auth", require("./routes/OrderData.js"));


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