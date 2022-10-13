import express from "express";
import expressSession from "express-session";
import path from "path";
// import fs from "fs";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(
//   expressSession({
//     secret: "Tecky Academy teaches typescript",
//     resave: true,
//     saveUninitialized: true,
//   })
// );

app.use(express.static("./JsBattleTutorial"));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
