// Write a Node.js script that takes a movie title and year as a command-line argument.
// Print an error message if a movie with the same title and year already exists in the database.
// If it does not exist, add a new row for the movie and its rating (null rating, 0 votes) to the database.
// If any query fails, roll back your changes. If queries succeed, print the new movie ID to the console. Use query parameters.
import sqlite from 'better-sqlite3';
import path from 'node:path';

const [ year ] = process.argv.slice(2);
const [ title ] = process.argv.slice(3);

if (!title || !year) {
    console.error('Error: You need to provide a year and movie title as command-line arguments');
    process.exit(1);
}

const dbFilePath = path.resolve('./data/movies.db');
const db = sqlite(dbFilePath);


try {
    db.exec('BEGIN');
    const query = (`SELECT * FROM movies WHERE year = ? AND title = ?`);

    const movies = db.prepare(query);
    const results = movies.all(year, title);

    if (results.length) {
        console.error('Error: Movie already exists in the database');
        process.exit(1);
    }
    else {
        const insertMovie = db.prepare('INSERT INTO movies (title, year) VALUES (?, ?)');
        const insertMovieResult = insertMovie.run(title, year);
        const movieId = insertMovieResult.lastInsertRowid;

        const insertRating = db.prepare('INSERT INTO ratings (rating, votes, movie_id) VALUES (?, ?, ?)');
        insertRating.run(0, 0, movieId); // cannot add null rating to ratings table as it is not nullable

        db.exec('COMMIT');

        console.log(movieId);
        console.log('Movie added successfully');
    }
} catch (error) {
    console.error('Error:', error.message);

    if (db.inTransaction) {
        db.exec('ROLLBACK');
    }
    process.exit(1);
}
