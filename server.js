import express from "express";


const app = express();

const PORT = 5000;



app.get("/", (req, res) => {
  console.log("Testing");
  res.send("Hello From Homepage");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
