const express = require("express"); 
// const { range } = require("express/lib/request");
require("../src/db/conn");

// require('dotenv').config()
// const router = require("./routes/index");
// const cors = require("cors");
// connectDb = require("./config/Connection");
const app =express();
const Ranking =require("../src/models/users");
const router = require("../src/routers/user");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

// app.use('./uploads', express.static('./uploads'));

// MongoDB file
// connectDb();

// const APP_PORT = process.env.PORT

// routes will be like http://localhost:5000/api/v1/product
// app.use("/v1", router);

 

app.listen(port, () => {
  console.log(`Server is running on the PORT ${port}`);
});