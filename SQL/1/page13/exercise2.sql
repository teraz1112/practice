-- 「WHERE character_name = "にんじゃわんこ"」のあとにコードを追加し、取得結果が「最大10件」となるようにデータを取得してください。

SELECT *
FROM purchases
WHERE character_name = "にんじゃわんこ"
limit 10;