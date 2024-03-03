-- 「FROM purchases」のあとにコードを追加し、priceカラムがNULLであるデータを取得してください

SELECT *
FROM purchases
where price is null;