SELECT *
FROM countries
WHERE rank < (
  select rank
  from countries
  where name="日本"
)
;