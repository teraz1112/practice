-- 「FROM purchases」のあとにコードを追加し、character_nameカラムが「にんじゃわんこ」でないデータを取得してください

SELECT *
FROM purchases
where not character_name="にんじゃわんこ";