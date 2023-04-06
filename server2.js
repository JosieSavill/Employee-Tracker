// import and require inquirer
const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'root',
      database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
  );


function init(){

  inquirer.prompt([
    {
        type: 'list',
        name: 'choice',
        message: "Select an employee by job title to add to your team, or select 'Team is Complete'",
        choices: ['Engineer', 'Intern', ' ✅ Team is Complete!!']  
    }
])
.then((response)=> {
    switch(response.choice){
        case 'Engineer': 
        createEngineer()
        break;
        case 'Intern':
        createIntern()
        break;
        default:
        buildTeam() 
    }
})

/*
    inquirer.prompt([{
      type: "list",
      choices: ["view all departments","view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "finished"],
      message: "What do you want to do?",
      name: "selected"

    }]).then( (answers) => {
      console.log(answers.selected)


    })
    */



}

init()




// // // code from mini project server.js:

// const express = require('express');
// // Import and require mysql2
// const mysql = require('mysql2');

// const PORT = process.env.PORT || 3001;
const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // TODO: Add MySQL password here
//     password: 'root',
//     database: 'movies_db'
//   },
//   console.log(`Connected to the movies_db database.`)
// );

// // Create a movie
// app.post('/api/new-movie', ({ body }, res) => {
//   const sql = `INSERT INTO movies (movie_name)
//     VALUES (?)`;
//   const params = [body.movie_name];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
//   });
// });

// // Read all movies
// app.get('/api/movies', (req, res) => {
//   const sql = `SELECT id, movie_name AS title FROM movies`;
  
//   db.query(sql, (err, data) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//        return;
//     }
//     res.json({
//       message: 'success',
//       data
//     });
//   });
// });

// // Delete a movie
// app.delete('/api/movie/:id', (req, res) => {
//   const sql = `DELETE FROM movies WHERE id = ?`;
//   const params = [req.params.id];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.statusMessage(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//       message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'deleted',
//         changes: result.affectedRows,
//         id: req.params.id
//       });
//     }
//   });
// });

// // Read list of all reviews and associated movie name using LEFT JOIN
// app.get('/api/movie-reviews', (req, res) => {
//   const sql = `SELECT movies.movie_name AS movie, reviews.review FROM reviews LEFT JOIN movies ON reviews.movie_id = movies.id ORDER BY movies.movie_name;`;
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// // BONUS: Update review name
// app.put('/api/review/:id', (req, res) => {
//   const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
//   const params = [req.body.review, req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: 'Movie not found'
//       });
//     } else {
//       res.json({
//         message: 'success',
//         data: req.body,
//         changes: result.affectedRows
//       });
//     }
//   });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
