-- Calculate the average rating and total votes for movies directed by a 'David Lynch'.
-- Display the name, the average rating, and the total votes.
SELECT
    people.name,
    AVG(ratings.rating) as average_rating,
    SUM(ratings.votes) as total_votes
FROM
    directors
    JOIN people ON directors.person_id = people.id
    JOIN ratings ON directors.movie_id = ratings.movie_id
WHERE
    people.name = 'David Lynch'
