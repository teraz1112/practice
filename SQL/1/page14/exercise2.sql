-- 「FROM purchases」のあとにコードを追加し、nameカラムが「プリン」を含むデータを取得してください

SELECT *
FROM purchases
where name like "%プリン%";