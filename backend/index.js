const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const client = require("./db/client");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const adminRoute = require("./routes/adminroutes");
app.use('/admin',adminRoute);

app.listen(port, async () => {
  await client.connect();
  console.log(`Backend is listening to port ${port}`);
});
