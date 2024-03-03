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

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/list', (req, res) => {
  connection.query(
    'SELECT * FROM articles',
    (error, results) => {
      res.render('list.ejs', { articles: results });
    }
  );
});

app.get('/article/:id', (req, res) => {
  const id = req.params.id;
  connection.query(
    'SELECT * FROM articles WHERE id = ?',
    [id],
    (error, results) => {
      res.render('article.ejs', { article: results[0] });
    }
  );
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/login', (req, res) => {
  // フォームから送信されたメールアドレスを定数emailに代入してください
  const email=req.body.email;
  
  //ユーザー情報を取得するコードを貼り付けてください
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      // 配列resultsの要素数で処理の分岐をしてください
      if(results.length>0){
        if(req.body.password===results[0].password){
          console.log("認証に成功しました"),
          res.redirect('/list')
        }
        else{
          console.log("認証に失敗しました"),
          res.redirect('/login')
        }
      }
      else{
        res.redirect('/login');
      }
    }
  );
});

app.listen(3000);
