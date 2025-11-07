import express from "express";
import { pool } from "./db.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Chefify API Running"));

app.listen(3000, () => console.log("Backend running on port 3000"));
