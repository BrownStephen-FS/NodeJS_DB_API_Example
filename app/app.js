const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const authorsRoutes = require("../api/routes/authors");
const booksRoutes = require("../api/routes/books");

//middleware for logging
app.use(morgan("dev"));

//middleware for parsing
app.use(
  express.urlencoded({
    extended: true,
  })
);

//middleware that all requests are json
app.use(express.json());

//middleware to handle the CORS policy
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    req.header(
      "Access-Control-Allow-Methods",
      "POST, PUT, GET, PATCH, DELETE8"
    );
  }

  next();
});

app.get("/", (req, res, next) => {
  res.status(201).json({
    message: "Service is Up.",
    method: req.method,
  });
});

app.use("/authors", authorsRoutes);
app.use("/books", booksRoutes);

app.use((req, res, next) => {
  const err = new Error("HTTP Status: 404 Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status,
    },
  });
});

//connect to mongodb
mongoose.connect(process.env.mongoDBURL, (err) => {
  if(err) {
    console.error("Error: ", err.message);
  } else {
    console.log("MongoDB connection was successful");
  }
});


module.exports = app;
