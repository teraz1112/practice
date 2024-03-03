-- 「FROM purchases」のあとにコードを追加し、categoryカラムが「食費」かつcharacter_nameカラムが「ひつじ仙人」であるデータを取得してください

SELECT *
FROM purchases
where category="食費"
and character_name="ひつじ仙人";