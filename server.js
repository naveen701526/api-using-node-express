import express from "express";
import usersRoutes from "./routes/users.js";

const app = express();

const PORT = 5000;

// all routes in here are starting with users
app.use('/', usersRoutes);

app.get("/", (req, res) => {
  console.log("Testing");
  res.send("Hello From Homepage");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
