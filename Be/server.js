const mongoose = require("mongoose");
const express = require("express");
const PORT = 5050;
const armorsRoute = require("./Routes/armors")
const helmetsRoute = require("./Routes/helmets")
const newKataneRoute = require("./Routes/newKatane")
const oldKataneRoute = require("./Routes/oldKatane")
const usersRoute = require("./Routes/users")
const standsRoute = require("./Routes/stands")
const loginRoute = require("./Routes/login")
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors())


app.use('/', armorsRoute)
app.use('/', helmetsRoute)
app.use('/', newKataneRoute)
app.use('/', oldKataneRoute)
app.use('/', usersRoute)
app.use('/', standsRoute)
app.use('/', loginRoute)





mongoose.connect(`${process.env.MONGODB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error",  console.error.bind(console, "Error during db connection"))
db.once( "open" , (() => console.log("Database successfully connected")));
app.listen( PORT,  () => console.log(`Server is running on port ${PORT}`));

