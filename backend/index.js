import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import employeeRoute from "./routes/employeeRoute.js";

const app = express();

//Middleware for parsing JSON data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Employee Management System API.");
});

app.use("/employees", employeeRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });
