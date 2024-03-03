-- categoryでグループ化し、各カテゴリーごとにpriceカラムの合計とcategoryカラムのデータを取得してください

SELECT sum(price),category
FROM purchases
group by category
;