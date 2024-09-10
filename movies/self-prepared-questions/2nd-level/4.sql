-- Select a list of unique years in which movies with rating more than 9 have been released, along with the count of movies released each year.
-- Display the year and the number of movies released in that year.
SELECT
    year,
    COUNT(*) AS movies_count
FROM
    movies
    JOIN ratings ON movies.id = ratings.movie_id
WHERE
    ratings.rating > 9.5
GROUP BY
    year;
