-- 日付ごとの合計金額のうち、2000円を超えるデータのみを取得してください

SELECT sum(price),purchased_at
FROM purchases
GROUP BY purchased_at
having sum(price)>2000
;