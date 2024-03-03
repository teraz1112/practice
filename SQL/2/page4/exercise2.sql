-- character_nameが「にんじゃわんこ」であるpriceカラムのデータの平均を取得してください

SELECT avg(price)
FROM purchases
WHERE character_name="にんじゃわんこ"
;