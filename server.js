const express = require("express");
const pickupPoints = require("./routes/pickupPoints");

const app = express();
const port = process.env.PORT || 4000;

// Allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
});

// Routes
app.use("/searchPickupPoints", pickupPoints);

// Generate 404 error for non supported routes
app.use((req, res, next) => {
  const error = new Error("Page not found");
  error.status = 404;
  next(error);
});

// Error handler
app.use((error, req, res, next) => {
  if (error.response) {
    res.status(error.response.status || 500);
    const message = error.response.data.error[0];
    if (message) {
      res.json({
        error: {
          message: `${message.parameter} ${message.error}`
        }
      });
    } else {
      res.json({
        error: {
          message: error.response.statusText
        }
      });
    }
  } else {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  }
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
