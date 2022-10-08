const express = require("express");

const { userRoutes } = require("./routes/user.routes")

const app = express();
app.use(express.json());

const PORT = 3030;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));