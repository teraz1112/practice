-- 「SELECT name, price, 」に追加し、消費税を含んだpriceカラムのデータを取得してください

SELECT name, price,price*1.08
FROM purchases;
