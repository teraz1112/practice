-- purchased_atごとの合計金額を取得してください

SELECT sum(price),purchased_at
FROM purchases
group by purchased_at
;