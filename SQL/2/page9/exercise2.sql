-- WHEREに条件を付け足してcategoryが食費であるデータを
-- purchased_atとcharacter_nameでグループ化してください

SELECT sum(price),purchased_at,character_name
FROM purchases
WHERE category="食費"
GROUP BY purchased_at,character_name
;