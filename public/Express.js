const express = require('express');
const app = express();

// 이미지 파일에 대한 Content-Type을 명시적으로 설정
app.get('public/images/mainData/world/africa.png', (req, res) => {
  res.set('Content-Type', 'image/png');
});
app.get('public/images/mainData/world/asia.png', (req, res) => {
  res.set('Content-Type', 'image/png');
});
app.get('public/images/mainData/world/europe.png', (req, res) => {
  res.set('Content-Type', 'image/png');
});
app.get('public/images/mainData/world/northamerica.png', (req, res) => {
  res.set('Content-Type', 'image/png');
});
app.get('public/images/mainData/world/southamerica.png', (req, res) => {
  res.set('Content-Type', 'image/png');
});
app.get('public/images/mainData/world/oceania.png', (req, res) => {
  res.set('Content-Type', 'image/png');
});

// React 파일을 서비스하는 라우트
app.use(express.static('path/to/react/files'));

// 나머지 라우트 처리
app.get('*', (req, res) => {
  // React 파일 전송 등의 로직 추가
});

// 서버 실행
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
