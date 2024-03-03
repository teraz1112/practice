-- WHEREに条件を付け足してcharacter_nameがにんじゃわんこであるデータを取得し、
-- グループ化してください

SELECT sum(price),purchased_at
FROM purchases
WHERE character_name="にんじゃわんこ"
GROUP BY purchased_at
;