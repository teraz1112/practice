const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'blog'
});

// トップ画面に対応するルーティングです
// URLと画面を表示するための処理を確認してください
app.get('/', (req, res) => {
  res.render('top.ejs');
});

// 一覧画面に対応するルーティングです
// URLと画面を表示するための処理を確認してください
app.get('/list', (req, res) => {
  connection.query(
    'SELECT * FROM articles',
    (error, results) => {
      // EJSファイルに渡すデータとプロパティ名を確認してください
      res.render('list.ejs', { articles: results });
    }
  );
});

// 閲覧画面に対応するルーティングです
// URLと画面を表示するための処理を確認してください
app.get('/article/:id', (req, res) => {
  const id = req.params.id;
  connection.query(
    'SELECT * FROM articles WHERE id = ?',
    [id],
    (error, results) => {
      // EJSファイルに渡すデータとプロパティ名を確認してください
      res.render('article.ejs', { article: results[0] });
    }
  );
});

app.listen(3000);
