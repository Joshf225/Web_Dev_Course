const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("New Request");
//   // res.send("Hi, your request was recieved!!")
//   res.send('<h1>This is my webpage!</h1>');
// });

app.get("/", (req, res) => {
  res.send("HomePage!!")
})

app.post("/cats", (req, res) => {
  res.send("Post trwurchubnver vceihfnerihc ehr")
})
app.get("/cats", (req, res) => {
  res.send("Meow!!")
})
app.get("/dogs", (req, res) => {
  res.send("Woof!!")
})

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
