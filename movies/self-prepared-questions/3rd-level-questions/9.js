// Add script to create a new table called archived_movies with the same schema as the movies table
// and add a new column called archived with a default value of 0.

import sqlite from 'better-sqlite3';
import path from 'node:path';

const dbFilePath = path.resolve('./data/movies.db');
const db = sqlite(dbFilePath);

try {
    db.exec(`
        CREATE TABLE archived_movies AS
        SELECT *
        FROM movies
        WHERE 1 = 0;
    `);

    db.exec(`
        ALTER TABLE archived_movies
        ADD COLUMN archived INTEGER DEFAULT 0;
    `);

    console.log('Table archived_movies created successfully with new column archived');
} catch (error) {
    console.error('Error:', error.message);
}
