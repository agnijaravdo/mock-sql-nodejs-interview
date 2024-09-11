import fs from "node:fs";
import sqlite from "better-sqlite3";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const [sqlFile] = process.argv.slice(2);

if (!sqlFile) {
  console.error("You have to provide an SQL file name as an argument");
  process.exit(1);
}

try {
  const baseDir = path.resolve(__dirname, "../");

  const sqlFilePath = path.resolve(baseDir, `${sqlFile}`);
  const dbFilePath = path.resolve(baseDir, "data/movies.db");

  const query = fs.readFileSync(sqlFilePath, { encoding: "utf-8" });

  const db = sqlite(dbFilePath);

  const movies = db.prepare(query);
  const results = movies.all();

  console.log(results);
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
