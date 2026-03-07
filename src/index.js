import express from "express";
import dotenv from "dotenv";
import { run } from "./utils/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
