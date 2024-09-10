-- Retrieve the name and birth of people born in the 1980s, ordered by their birth year in descending order.
-- Limit results to 5 entries per page and display the second page.
SELECT
    name,
    birth
FROM
    people
WHERE
    birth BETWEEN 1980 AND 1989
ORDER BY
    birth DESC
LIMIT
    5
OFFSET
    5;
