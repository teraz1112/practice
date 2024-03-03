-- 「FROM purchases」のあとにコードを追加し、purchased_atカラムが「2017-08-01以前」のデータを取得してください

SELECT *
FROM purchases
where purchased_at<="2017-08-01";