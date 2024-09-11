// Quentin Tarantino and Steven Spielberg both released a movie in 2015.
// Write a query that lists these movies along with their directors, their ratings, and the number of votes.
// If a rating exceeds 7, increase the vote count by 100 for that movie.
// Write a Node.js script to execute this query, ensuring that the entire operation is done in a transaction.

import sqlite from "better-sqlite3";
import path from "node:path";

const dbFilePath = path.resolve("./data/movies.db");
const db = sqlite(dbFilePath);

try {
  db.transaction(() => {
    const query = `
            SELECT
                movies.title,
                people.name AS director,
                ratings.rating,
                ratings.votes
            FROM
                movies
            JOIN directors ON movies.id = directors.movie_id
            JOIN people ON directors.person_id = people.id
            JOIN ratings ON movies.id = ratings.movie_id
            WHERE
                movies.year = 2015
                AND (people.name = 'Quentin Tarantino' OR people.name = 'Steven Spielberg');
        `;

    const movies = db.prepare(query);
    const moviesResult = movies.all();

    console.log("Movies:", moviesResult);

    const updateQuery = `
            UPDATE ratings
            SET votes = votes + 100
            WHERE movie_id IN (
                SELECT movies.id
                FROM movies
                JOIN directors ON movies.id = directors.movie_id
                JOIN people ON directors.person_id = people.id
                JOIN ratings ON movies.id = ratings.movie_id
                WHERE movies.year = 2015
                AND (people.name = 'Quentin Tarantino' OR people.name = 'Steven Spielberg')
                AND ratings.rating > 7
            );
        `;

    db.exec(updateQuery);
  })();
  console.log("Transaction completed successfully");
} catch (error) {
  console.error("Transaction failed:", error.message);
  process.exit(1);
}
