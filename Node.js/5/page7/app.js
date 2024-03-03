const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'blog'
});

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/list', (req, res) => {
  // セッション情報のユーザーIDとundefinedを比較するif文を追加してください
  if(req.session.userId===undefined){
    console.log("ログインしていません");
  }
  else{
    console.log("ログインしています");
  }
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
  const email = req.body.email;
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if (results.length > 0) {
        if (req.body.password === results[0].password){
          req.session.userId=results[0].id,
          
          // ユーザーIDをセッション情報に保存してください
          
          res.redirect('/list');
        } else {
          // ここから削除
          // ここまで
          res.redirect('/login');
        }
      } else {
        res.redirect('/login');
      }
    }
  );
});

app.listen(3000);
