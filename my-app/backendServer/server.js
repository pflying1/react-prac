const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.static("build"));
// 사용자 정보를 반환하는 API 엔드포인트
app.get("/api/users", (req, res) => {
  // 사용자 정보 처리
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];
  res.json(users);
});
// 서버 시작
app.listen(5000, () => {
  console.log("서버가 http://localhost:5000 에서 실행 중입니다.");
});
