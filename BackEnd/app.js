const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const port = process.env.PORT || 5000;
const app = express();

// midlewares
app.use(bodyParser.json());
app.use(cors());
app.set("trust proxy", true);

// import Routes
app.use("/img", express.static("img"));

const productsRoute = require("./routes/products");
app.use("/api/products", productsRoute);

const userRoute = require("./routes/users");
app.use("/api/users", userRoute);

const cartRoute = require("./routes/cart");
app.use("/api/cart", cartRoute);

const authRoute = require("./routes/auth");
app.use("/api/user", authRoute);

// connect to db
const reconnectTimeout = 5000; // ms.
function connect() {
  mongoose
    .connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auto_reconnect: true
    })
    .catch(() => {});
}

// Route status
app.get("/", (req, res) => {
  res.send({ status: "ok" });
});

const db = mongoose.connection;
db.on("connecting", () => {
  console.info("Connecting to MongoDB...");
});

db.on("error", error => {
  console.error(`MongoDB connection error: ${error}`);
  mongoose.disconnect();
});

db.on("connected", () => {
  console.info("Connected to MongoDB!");
});

db.once("open", () => {
  console.info("MongoDB connection opened!");
});

db.on("reconnected", () => {
  console.info("MongoDB reconnected!");
});

db.on("disconnected", () => {
  console.error(
    `MongoDB disconnected! Reconnecting in ${reconnectTimeout / 1000}s...`
  );
  setTimeout(() => connect(), reconnectTimeout);
});

connect();
