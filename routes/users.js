import express from "express";

const router = express.Router();

const users = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 25,
  },
  {
    firstname: "Jane",
    lastname: "Doe",
    age: 24,
  },
];

router.get("/users", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);

  res.send(`User with the name ${user.firstname} added to the database...`);
});

export default router;
