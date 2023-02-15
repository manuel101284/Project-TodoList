const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = {useUnifiedTopology: true, useNewUrlParser: true};
//const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://adminuser:adminuser@cluster-todolist.vhnrpzx.mongodb.net/test", connectionOptions)
//mongoose.connect("mongodb://localhost:27017/To-Do-List-Project", connectionOptions)
    .then(() => console.log("The Conection is OK"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening in port " + PORT);
});