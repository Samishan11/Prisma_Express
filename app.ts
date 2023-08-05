import express, { Express } from "express";
import { router } from "./src/route/route";
const PORT = 5000;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v2", router);
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
