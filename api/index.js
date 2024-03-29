import express from "express";
import userRoutes from "./routes/user.js";
import addRoutes from "./routes/add.js";
import bookRoutes from "./routes/book.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://covid-app-frontend.onrender.com",
      "https://covid-app-one-alpha.vercel.app",
    ],
  })
);

// app.use(cors());
app.use(cookieParser());

app.use("/log", userRoutes);
app.use("/add", addRoutes);
app.use("/book", bookRoutes);

app.listen(8080, () => {
  console.log("server connected");
});
