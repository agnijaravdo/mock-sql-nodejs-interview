-- Select all movies released in the year 2022.
-- Display the title, and year of the movies where the title contains the word "Great" and the id is greater than 100.
SELECT
    title,
    year
FROM
    movies
WHERE
    year = 2022
    AND title LIKE '%great%'
    AND id > 100;
