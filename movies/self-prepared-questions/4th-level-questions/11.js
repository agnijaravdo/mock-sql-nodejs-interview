// Select directors names and the average rating of the movies they have directed.
// Include only directors who have directed more than 3 movies.
// Add pagination support to the query.
// Write a Node.js script to execute this query and print the results to the console.

import sqlite from 'better-sqlite3';
import path from 'node:path';

const pageNumber = process.argv[2];
const pageSize = process.argv[3];

if (!pageNumber || !pageSize) {
    console.error('Error: You need to provide a page number and page size as command-line arguments');
    process.exit(1);
}

const page = parseInt(pageNumber, 10) || 1;
const size = parseInt(pageSize, 10) || 5;
const offset = (page - 1) * size;

const dbFilePath = path.resolve('./data/movies.db');
const db = sqlite(dbFilePath);

const query = `
    SELECT
        people.name AS director_name,
        AVG(ratings.rating) AS average_rating
    FROM
        people
    JOIN directors ON people.id = directors.person_id
    JOIN movies ON directors.movie_id = movies.id
    JOIN ratings ON movies.id = ratings.movie_id
    GROUP BY
    people.name
    HAVING
        COUNT(movies.id) > 3
    ORDER BY
        average_rating DESC
    LIMIT ? OFFSET ?;
`;

try {
    const movies = db.prepare(query);
    const results = movies.all(size, offset);
    console.log('Directors and their average ratings:', results);
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}
