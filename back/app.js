const express = require("express");
const postRouter = require("./routes/post");

const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

// 테스트
app.use("/post", postRouter);

app.listen(3060, () => {
  console.log("서버 실행 중");
});
