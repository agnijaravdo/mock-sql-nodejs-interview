-- Barbenheimer. In 2023, Christopher Nolan and Greta Gerwig each released a new movie.
-- These movies already exist in the database, but they have no ratings.
-- Write a single query to add a rating to one of these movies.
-- For these movies, you can assume there is only one movie with the same title and year in the database.
WITH
    movie_result AS (
        SELECT
            movies.id AS movie_id
        FROM
            movies
        WHERE
            movies.year = 2023
            AND movies.title = 'Barbie'
    )
INSERT INTO
    ratings (movie_id, rating, votes)
SELECT
    movie_result.movie_id,
    8.5,
    100
FROM
    movie_result
WHERE
    NOT EXISTS (
        SELECT
            *
        FROM
            ratings
        WHERE
            ratings.movie_id = movie_result.movie_id
    );

--To check results
-- SELECT
--     movies.id,
--     movies.title,
--     ratings.rating
-- FROM
--     movies
--     LEFT JOIN ratings ON movies.id = ratings.movie_id
-- WHERE
--     movies.year = 2023
--     AND movies.title = 'Barbie';
