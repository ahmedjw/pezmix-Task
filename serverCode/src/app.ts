import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import scraperRoutes from "./routes/scraperRoutes";
import emailRoutes from "./routes/emailRoutes";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/scrape", scraperRoutes);
app.use("/api/email", emailRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// running server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
