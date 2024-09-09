import sqlite from 'better-sqlite3';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';

try{
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseDir = path.resolve(__dirname, '../');
const dbFilePath = path.resolve(baseDir, 'data/movies.db');

const db = sqlite(dbFilePath);

const movies = db.prepare('SELECT * FROM movies WHERE year = ?');
const results = movies.all('2024');

console.log(results);

} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}
