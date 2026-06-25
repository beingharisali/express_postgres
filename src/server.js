require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const userRoutes = require('./routes/users')

app.use(express.json());
app.use('/api/v1/users', userRoutes)
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "API Working",
  });
});
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
