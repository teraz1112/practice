const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'progate',
  password: 'password',
  database: 'list_app'
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  // データベースからデータを取得する処理を書いてください
  connection.query('select * from items',
  (error,results)=>{
    console.log(results);
    res.render('index.ejs');
  }
  );  
  
  // 下記のコードを削除してください

  // 削除ここまで
});

app.listen(3000);