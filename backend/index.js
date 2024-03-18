const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = require("./db/database");
const app = express();
const port = process.env.PORT;

connectDb();

app.use(express.json());
app.use(cors());

const adminRoute = require("./routes/adminRoutes");
app.use("/admin", adminRoute);

app.listen(port, async () => {
  console.log(`Server is listening to port ${port}`);
});
