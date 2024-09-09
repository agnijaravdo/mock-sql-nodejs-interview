import path from 'node:path';
import sqlite from 'better-sqlite3';

const dbFilePath = path.resolve('./movies.db');

const db = sqlite(dbFilePath);

const movies = db.prepare('SELECT * FROM movies WHERE year = ?');
const results = movies.all('2024');

console.log(results);
