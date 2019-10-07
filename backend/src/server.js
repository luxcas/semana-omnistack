const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb://omnistack:omnistack@cluster0-shard-00-00-7lkjq.mongodb.net:27017,cluster0-shard-00-01-7lkjq.mongodb.net:27017,cluster0-shard-00-02-7lkjq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// mongoose.connect('mongodb://admin:123456@127.0.0.1:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3334);
