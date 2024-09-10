-- Using UNION and INTERSECT, find all movies released in either 2020 or 2021,
-- and then find which of those movies have a rating of more than 9.8.
SELECT
    title,
    year
FROM
    (
        SELECT
            title,
            year
        FROM
            movies
        WHERE
            year = 2020
        UNION
        SELECT
            title,
            year
        FROM
            movies
        WHERE
            year = 2021
    )
INTERSECT
SELECT
    movies.title,
    movies.year
FROM
    movies
    JOIN ratings ON movies.id = ratings.movie_id
WHERE
    ratings.rating > 9.8;
