import express, { Express } from "express";

const app: Express = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
