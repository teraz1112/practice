-- 「FROM purchases」のあとにコードを追加し、nameカラムが「プリン」を含まないデータを取得してください

SELECT *
FROM purchases
where not name like "%プリン%";