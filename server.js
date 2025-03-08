import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import rolRoute from "./src/app/controllers/rol.routes.js";
import userRoute from "./src/app/controllers/user.routes.js";
import userRolRoute from "./src/app/controllers/userRol.routes.js";

dotenv.config();

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

//app.use(notFound);
//app.use(handleError);

// api routes
app.use("/", rolRoute);
app.use("/", userRoute);
app.use("/", userRolRoute);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/*// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});*/

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});