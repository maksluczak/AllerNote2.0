require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const auth = require("./src/routes/authRoutes");
const routes = require("./src/routes");

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', routes);
app.use('/auth', auth);

module.exports = app;