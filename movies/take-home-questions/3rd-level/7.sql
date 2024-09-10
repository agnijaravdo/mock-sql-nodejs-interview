-- Write a query that lists all movie titles where Scarlett Johansson and Chris Evans starred together.
SELECT
    movies.title
FROM
    movies
    JOIN stars ON movies.id = stars.movie_id
    JOIN people on stars.person_id = people.id
WHERE
    people.name = 'Scarlett Johansson'
    OR people.name = 'Chris Evans'
GROUP BY
    movies.id
HAVING
    COUNT(*) > 1;
