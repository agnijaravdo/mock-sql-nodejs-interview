# mock-sql-nodejs-interview

The project includes movies folder with 5 different folders for questions, scripts and data. Inside a **self-prepared-questions** and **take-home-questions** folders, there are other folders which group questions by difficulty level.

## Structure

- **movies/cs50-queries** - this folder contains questions from cs50 movies problem set https://cs50.harvard.edu/x/2023/psets/7/movies/;
- **movies/data** - this folder contains database of movies which is used in the questions;
- **movies/scripts** - this folder contains Node.js scripts which are used to read the queries in the questions and execute them against the database;
- **movies/self-prepared-questions** - this folder contains SQL, Node.js questions with answers grouped by difficulty level which prepared by the author of the project;
- **movies/take-home-questions** - this folder contains SQL, Node.js questions with answers grouped by difficulty level which where provided as an requirement;

## Stack

The project uses the following stack:

- [Node.js](https://nodejs.org/docs/latest/api/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md)

## How to run

To run the project, you need to have Node.js and sqlite3 installed on your machine.

To run node.js files, you need to execute the following command based on your path:

```bash
node self-prepared-questions/4th-level-questions/12.js
```

To run SQL files, you need to execute the following command based on your path. For SQL files execusion you can reuse existing **readQueryFromFile.js** script in the scripts folder:

```bash
node scripts/readQueryFromFile.js cs50-queries/8.sql
```

you can also run the script with the following command (when running from movies folder):

```bash
sqlite3 ./data/movies.db < cs50-queries/8.sql
```

To read the database schema, run:

```bash
sqlite3 ./data/movies.db .schema
```
