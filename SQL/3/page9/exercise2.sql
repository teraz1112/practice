SELECT players.name as "選手名",teams.name as "前年所属していたチーム"
FROM players
left join teams
on players.previous_team_id=teams.id;