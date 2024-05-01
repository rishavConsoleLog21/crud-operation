import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import {Employee} from "./models/employeeModel.js";

const app = express();

//Middleware for parsing JSON data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes to save a new employee
app.post("/employee", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.phone ||
      !req.body.role
    ) {
      return res
        .status(400)
        .send({ message: "Please fill all required fields." });
    }
    const newEmployee = ({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      role: req.body.role,
    });

    const employee = await Employee.create(newEmployee);

    return res.status(201).send(employee);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

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
