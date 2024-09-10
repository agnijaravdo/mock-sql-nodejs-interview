-- Select all movies and their director names, including all movies even if they don't have a director
-- and all directors even if they haven't directed any movies.
-- Display movie title, year, and director name. Use union and limit results to 10.
SELECT
    movies.title AS movie_title,
    movies.year,
    people.name AS director_name
FROM
    movies --movies table is left, includes movies with no directors
    LEFT JOIN directors ON movies.id = directors.movie_id
    LEFT JOIN people ON directors.person_id = people.id
UNION ALL -- to avoid cost on duplicate removal
SELECT
    movies.title AS movie_title,
    movies.year,
    people.name AS director_name
FROM
    movies
    RIGHT JOIN directors ON movies.id = directors.movie_id --directors table is right, includes directors with no movies
    RIGHT JOIN people ON directors.person_id = people.id
LIMIT
    10;
