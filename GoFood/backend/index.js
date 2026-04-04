const express = require("express"); 

const app = express();
const port = 5000;
const mongoDB = require("./db");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  
  next();

})

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
