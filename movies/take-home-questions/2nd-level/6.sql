-- List all the movies directed by Frank Darabont and their release years.
-- Order the results by the movie's release year in descending order.
SELECT
    movies.title,
    year
FROM
    people
    JOIN directors ON people.id = directors.person_id
    JOIN movies ON directors.movie_id = movies.id
WHERE
    people.name = 'Frank Darabont'
ORDER BY
    movies.year DESC;
