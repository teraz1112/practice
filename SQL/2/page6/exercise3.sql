-- character_nameが「にんじゃわんこ」であるレコードの中で、
-- もっとも大きいpriceカラムの値を取得してください

SELECT max(price)
FROM purchases
WHERE character_name="にんじゃわんこ"
;