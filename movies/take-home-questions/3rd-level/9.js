// Write a Node.js script that reads the local .env file to get a FAVORITE_DIRECTOR variable and access the movie database.
// The script should return a list of movies the favorite director directed.
// The list should be ordered by movie rating in descending order.
// Add a local .env file to your project and add the FAVORITE_DIRECTOR variable to it.

// Run the script from the terminal using the following command: node [pathToFile].js

import sqlite from 'better-sqlite3';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

try {
  const dbFilePath = path.resolve(__dirname, '../../data/movies.db');

  const db = sqlite(dbFilePath);

  const favoriteDirector = process.env.FAVORITE_DIRECTOR;
  if (!favoriteDirector) {
    throw new Error('FAVORITE_DIRECTOR is not defined in .env file');
  }

  const query = db.prepare(`
    SELECT title
    FROM movies
    JOIN directors ON movies.id = directors.movie_id
    JOIN ratings ON movies.id = ratings.movie_id
    JOIN people ON directors.person_id = people.id
    WHERE people.name = ?
    ORDER BY ratings.rating DESC
  `);

  const results = query.all(favoriteDirector);

  console.log(results);

} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
