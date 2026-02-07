import { Request, Response, NextFunction } from "express";


export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Mongo invalid ObjectId
  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid ID format";
  }

  // Mongo duplicate key
  if (err.code === 11000) {
    statusCode = 409;
    message = "Duplicate field value";
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((val: any) => val.message)
      .join(", ");
  }

  console.error("🔥 ERROR:", err);

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
