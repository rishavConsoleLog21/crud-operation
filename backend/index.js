import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Employee } from "./models/employeeModel.js";

const app = express();

//Middleware for parsing JSON data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Employee Management System API.");
});

// Routes to save a new employee
app.post("/employees", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.phone ||
      !req.body.designation ||
      !req.body.gender ||
      !req.body.course ||
      !req.body.image
    ) {
      return res
        .status(400)
        .send({ message: "Please fill all required fields." });
    }
    if (req.body.phone.length !== 10) {
      return res
        .status(400)
        .send({ message: "Phone number must be 10 digits." });
    }

    // Check if employee with the same email or phone number already exists
    const existingEmployee = await Employee.findOne({ email: req.body.email });
    if (existingEmployee) {
      return res
        .status(400)
        .send({ message: "Employee with this email already exists." });
    }
    const existingPhone = await Employee.findOne({ phone: req.body.phone });
    if (existingPhone) {
      return res
        .status(400)
        .send({ message: "Employee with this phone number already exists." });
    }

    const newEmployee = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      designation: req.body.designation,
      gender: req.body.gender,
      course: req.body.course,
      image: req.body.image,
    };

    const employee = await Employee.create(newEmployee);

    return res.status(201).send(employee);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to get all employees from the database
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find({});
    return res.status(200).json({
      count: employees.length,
      data: employees,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to get One employees from the database
app.get("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).send({ message: "Employee not found" });
    }
    return res.status(200).json(employee);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to update an employee
app.put("/employees/:id", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.phone ||
      !req.body.designation ||
      !req.body.gender ||
      !req.body.course ||
      !req.body.image
    ) {
      return res
        .status(400)
        .send({ message: "All the field should be filled" });
    }

    const { id } = req.params;

    const result = await Employee.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }

    return res.status(200).json({ message: "Employee updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route to delete an employee
app.delete("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Employee.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }

    return res.status(200).json({ message: "Employee deleted successfully" });
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
