const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;

const values = [`%${cohortName}%`, limit];

pool.query(queryString, values)
.then(res => {
  // console.log(res)
  res.rows.forEach(user => {
    console.log(`User: ${user.name}  |  id: ${user.student_id}  |  cohort: ${user.cohort}`)
  })
})
.catch(err => console.error('query error', err.stack));