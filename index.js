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

app.get('/courses/:id',(req,res)=>{
    const courseId = req.params.id;
    const courseDescrition = topics.filter( n => n.course_id === courseId);
    res.send(courseDescrition);

});
app.get('/topics/:id',(req,res) =>{
    const topicId = req.params.id;
    const selectedTopic = topics.find(t => t.id === topicId);
    res.send(selectedTopic);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});