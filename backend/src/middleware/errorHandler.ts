import { Request, Response, NextFunction } from "express";

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.originalUrl}` });
};

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("[error]", err);
  const status = err.statusCode || 500;
  res.status(status).json({
    error: err.message || "Internal server error",
  });
};
