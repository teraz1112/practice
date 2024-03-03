/*
「FROM purchases」のあとにコードを追加し、
NOT演算子を用いてcharacter_nameカラムが「にんじゃわんこ」でないデータを取得してください。
*/

SELECT *
FROM purchases
where not character_name="にんじゃわんこ";