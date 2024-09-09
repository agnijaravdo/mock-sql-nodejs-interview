import fs from 'node:fs';
import path from 'node:path';
import sqlite from 'better-sqlite3';

const [ sqlFile ] = process.argv.slice(2);

if (!sqlFile) {
  console.error('You have to provide an SQL file name as an argument');
  process.exit(1);
}

try {
const sqlFilePath = path.resolve(`./cs50-queries/${sqlFile}`);
const dbFilePath = path.resolve('./data/movies.db');

const query = fs.readFileSync(sqlFilePath, { encoding: 'utf-8' });

const db = sqlite(dbFilePath);

const movies = db.prepare(query);
const results = movies.all();

console.log(results);

} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}
