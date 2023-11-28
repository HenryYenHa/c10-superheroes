import express from "express";
import session from "express-session";
import passport from "passport";
import superheroRouter from "./routes/superhero.js";
import userRouter from "./routes/auth.js";
import path from "path";
// import tokenCheck from "./lib/tokenCheck.js";
const app = express();
const tokenCheck = (req, res, next) => {
  if (req.cookie) next(); // If cookie exists, continue
  res.send(401); // Throw error
};
const __dirname = path.resolve();

const pathToBuild = path.join(__dirname, "../frontend/dist");
console.log("dirname is ", pathToBuild);

const PORT = process.env.PORT;

app.use(express.static(pathToBuild));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));

app.use(express.json());
app.use("*", (req, res, next) => {
  console.log("path is", req.originalUrl);
  next();
});
app.use("/api/superhero", tokenCheck, superheroRouter);
app.use("/api/user", tokenCheck, userRouter);
app.get("/test", (req, res) => {
  res.send("test endpoint working");
});

app.use("*", (req, res) => {
  res.sendFile(path.join(pathToBuild, "index.html"));
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
