//Initiate backend express server
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const PORT = 8000;

app.listen(PORT, () =>
  console.log(`server running successfully on PORT: ${PORT}`)
);

//Connect to Database

import Connection from "./Database/db.js";
import dotenv from "dotenv";
//  TO STORE ALL OUR PASSWORDS AND SENSITIVE INFORMATION IT IS A GOOD PRACTICE TO US .ENV FILE AS WE NEVER PUSH THIS FILE ON GITHUB OR ON FINAL PRODUCTION

//CORS error removal
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

//

import DefaultData from "./defaultData.js";
DefaultData();

//ROUTES
import Router from "./routes/route.js";

app.use("/", Router);
