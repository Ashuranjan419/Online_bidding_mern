require('dotenv').config();
console.log("MongoDB URI:", process.env.MONGODB_URI);
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const biddingRoute = require("./routes/biddingRoute");
const categoryRoute = require("./routes/categoryRoute");
const errorHandler = require("./middleWare/errorMiddleWare");
const User = require("./model/userModel");

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

//Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/product", productRoute);
app.use("/api/bidding", biddingRoute);
app.use("/api/category", categoryRoute);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Error Middleware
app.use(errorHandler);

// Routes
app.get("/", (req, res) => {
  res.send("Home Pages");
});

//connect to mongoose
mongoose.connect('mongodb+srv://ranjan_ashutosh:Bidout123%40@cluster0.8ohk5.mongodb.net/Bid-Out?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => { 
  console.log("Connected to MongoDB");
// Start the server after successful MongoDB connection
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});
// mongosh "mongodb+srv://cluster0.8ohk5.mongodb.net/" --apiVersion 1 --username ranjan_ashutosh
// ranjan_ashutosh  Bidout123@   olfg3DQiMQXYpQoM