-- 日付とキャラクターごとの合計金額のうち、3000円を超えるデータのみを取得してください

SELECT sum(price),purchased_at,character_name
FROM purchases
GROUP BY purchased_at,character_name
having sum(price)>3000
;
