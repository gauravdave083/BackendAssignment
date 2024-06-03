import express from "express";
import { create, deleteUser, fetch, update } from "../controller/userController.js";

const route = express.Router();

// Define routes and their corresponding controller functions
route.get("/getallusers", fetch); // Route to fetch all users
route.post ("/create", create); // Route to create a new user
route.put("/update/:id", update); // Route to update a user by ID
route.delete("/delete/:id", deleteUser); // Route to delete a user by ID

export default route;