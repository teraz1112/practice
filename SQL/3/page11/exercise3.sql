SELECT countries.name as "国名",avg(goals) as "平均得点"
FROM players
join countries
on players.country_id=countries.id
group by countries.name;