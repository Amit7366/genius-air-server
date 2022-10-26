const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const topics = require('./data/course-details.json');

app.get('/', (req, res) => {
  res.send(topics);
});

app.get('/courses',(req,res) =>{
    res.send(courses);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});