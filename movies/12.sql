-- A SQL query to list the titles of all movies in which both Bradley Cooper and Jennifer Lawrence starred.
SELECT
    movies.title
FROM
    movies
    JOIN stars ON movies.id = stars.movie_id
    JOIN people on stars.person_id = people.id
WHERE
    people.name = 'Bradley Cooper'
    OR people.name = 'Jennifer Lawrence'
GROUP BY
    movies.id
HAVING
    COUNT(*) > 1;
