const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I love dogs!");
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  res.send("SORRY YOU NEED A PASSWORD!!!");
};
// app.use((req, res, next) => {
//   console.log("This is my first middleware");
//   return next();
// });
// app.use((req, res, next) => {
//   console.log("This is my second middleware");
//   return next();
// });

app.get("/", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("Home Page");
});

app.get("/dogs", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("Woof");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("MY SECRET IS: Sometimes I hate people");
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

app.listen(3000, () => {
  console.log("App running on localhost:3000");
});
