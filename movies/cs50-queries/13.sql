-- A SQL query to list the names of all people who starred in a movie in which Kevin Bacon also starred.
SELECT DISTINCT
    people_2.name
FROM
    people people_1
    JOIN stars stars_1 ON people_1.id = stars_1.person_id
    JOIN stars stars_2 ON stars_1.movie_id = stars_2.movie_id
    JOIN people people_2 ON stars_2.person_id = people_2.id
WHERE
    people_1.name = 'Kevin Bacon'
    AND people_1.birth = 1958
    AND people_2.id != people_1.id
