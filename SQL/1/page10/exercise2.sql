-- 「FROM purchases」のあとにコードを追加し、priceカラムがNULLでないデータを取得してください

SELECT *
FROM purchases
where price is not null;