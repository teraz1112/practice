--ASを使って、取得したカラム名を"身長180cm以上の選手"としてください
SELECT name as "身長180cm以上の選手"
FROM players
where height>=180;