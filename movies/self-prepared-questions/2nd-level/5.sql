-- Select the maximum number of movies in history directed by the same director. Only consider directors who have directed at least 100 movies.
SELECT
    MAX(directed_movies_count) AS max_movies_count
FROM
    (
        SELECT
            COUNT(directors.movie_id) AS directed_movies_count
        FROM
            people
            JOIN directors ON people.id = directors.person_id
        GROUP BY
            people.name
        HAVING
            COUNT(directors.movie_id) >= 100
    ) AS director_counts;
