import fs from 'node:fs';
import path from 'node:path';
import sqlite from 'better-sqlite3';

const sqlFilePath = path.resolve('./12.sql');
const dbFilePath = path.resolve('./movies.db');

const query = fs.readFileSync(sqlFilePath, { encoding: 'utf-8' });

const db = sqlite(dbFilePath);

const movies = db.prepare(query);
const results = movies.all();

console.log(results);
