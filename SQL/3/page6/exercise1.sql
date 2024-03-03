SELECT *
FROM players
--結合するテーブル名を追加してください
JOIN countries
--結合条件を追加してください
ON players.country_id=countries.id;