// Perform a database migration that adds a new column called archived with a default value of 0 to the movies table.
// If the column already exists, drop and add it again.
// Ensure this operation runs within a transaction.

import sqlite from 'better-sqlite3';
import path from 'node:path';

const dbFilePath = path.resolve('./data/movies.db');
const db = sqlite(dbFilePath);

const columnExists = db.prepare(`
    SELECT 1
    FROM pragma_table_info('movies')
    WHERE name = 'archived';
`).get();

try {
    db.transaction(() => {
        if (columnExists) {
            db.exec('ALTER TABLE movies DROP COLUMN archived;');
        }

        db.exec('ALTER TABLE movies ADD COLUMN archived INTEGER DEFAULT 0;');
    })();

    console.log('Migration completed successfully');
} catch (error) {
    console.error('Migration failed:', error.message);
}
