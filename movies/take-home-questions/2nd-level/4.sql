-- Count all the times that Martin Scorsese directed.
SELECT
    COUNT(*)
FROM
    people
    JOIN directors ON people.id = directors.person_id
WHERE
    people.name = 'Martin Scorsese'
