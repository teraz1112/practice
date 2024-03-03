-- purchased_atとcharacter_nameごとにお金を使った回数を取得してください

SELECT count(price),purchased_at,character_name
FROM purchases
GROUP BY purchased_at,character_name
;
