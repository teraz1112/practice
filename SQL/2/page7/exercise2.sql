-- purchased_atごとのお金を使った数を取得してください

SELECT count(price),purchased_at
FROM purchases
group by purchased_at
;