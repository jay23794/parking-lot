//app.ts     →  express app concerns

import express, { Application, Request, Response } from "express";
import routes from "./routes";


const app: Application = express();

/* -------------------- Global Middlewares -------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- Health Check -------------------- */
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("<h1>Hello, Production-ready Node + TS!</h1>");
});

/* -------------------- Routes -------------------- */
app.use("/api/v1", routes);

/* -------------------- 404 Handler -------------------- */
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});




/* -------------------- Global Error Handler -------------------- */
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

export default app;
