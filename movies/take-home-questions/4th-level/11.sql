-- Do starting letters correlate with the average movie rating?
-- List movie title starting letters and an average rating associated with them.
-- Ignore non-Latin and non-uppercase letters.
-- Use a valid regex pattern in SQLite 3
SELECT
    SUBSTRING(movies.title, 1, 1) AS starting_letter,
    AVG(ratings.rating) AS average_rating
FROM
    movies
    JOIN ratings ON movies.id = ratings.movie_id
WHERE
    starting_letter GLOB '[A-Z]*'
GROUP BY
    starting_letter;
