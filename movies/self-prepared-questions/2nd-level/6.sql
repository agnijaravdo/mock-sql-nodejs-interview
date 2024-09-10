-- Write a query to update a movie's title which include world 'Matrix' to 'New Title' for the year no less than 2000.
UPDATE movies
SET
    title = 'New Title'
WHERE
    title LIKE '%Matrix%'
    AND year >= 2000;

--To check results
-- SELECT
--     title,
--     year,
-- FROM
--     movies
-- WHERE
--     title = 'New Title'
--     AND year >= 2000
-- ORDER BY
--     title;
