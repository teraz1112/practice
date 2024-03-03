const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

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
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      res.render('index.ejs', {items: results});
    }
  );
});

app.get('/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/create', (req, res) => {
  // データベースに追加する処理を書いてください
  connection.query(
    'insert into items (name) values(?)',
    [req.body.itemName],
    (error,results)=>{
      connection.query(
        'SELECT * FROM items',
        (error, results) => {
          res.render('index.ejs', {items: results});
        }
      );

    });

});

app.listen(3000);