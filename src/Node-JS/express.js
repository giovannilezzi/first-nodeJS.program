const Joi = require('@hapi/joi')
const express = require('express');
const app = express();
app.use(express.json()) // per parsificare il body in JSON

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.get('/api/courses/:id', (req, res) => {
    const obj = {
        params: req.params.id,
        query: req.query
    }

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(400).send('The course with the given ID was not found');

    res.send(course);

})

app.post('/api/courses', (req, res) => {

    // validate
    const {error} = validateCourse(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
    }

    const course = {
        id: courses.length,
        name: req.body.name
    }

    courses.push(course);

    res.send(course);
})

app.put('/api/courses/:id', (req, res) => {

    // Look up at the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(400).send('The course with the given ID was not found');

    // validate
    const {error} = validateCourse(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
    }
    // update course
    course.name = req.body.name;
    res.send(courses);
})

app.delete('/api/courses/:id', (req, res) => {

    // Look up at the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(400).send('The course with the given ID was not found');

    // validate
    const {error} = validateCourse(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
    }
    // update course
    const index = courses.indexOf(course);

    courses.splice(index,1)
    res.send(course);
})

validateCourse = (course) => {
    const schema  = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`))