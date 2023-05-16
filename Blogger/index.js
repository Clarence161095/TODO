const express = require('express');
const sanitizeHtml = require('sanitize-html');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post('/comment', (req, res) => {
  const sanitizedComment = sanitizeHtml(req.body.comment);
  res.send(`受け取ったコメント：${sanitizedComment}`);
});

app.listen(3000, () => {
  console.log('サーバーがポート3000でリッスンしています');
});
