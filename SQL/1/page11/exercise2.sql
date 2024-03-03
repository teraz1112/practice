-- 「FROM purchases」のあとにコードを追加し、categoryカラムが「食費」またはcharacter_nameカラムが「にんじゃわんこ」であるデータを取得してください

SELECT *
FROM purchases
where category="食費"
or character_name="にんじゃわんこ";