const express = require('express');
const bodyParser = require('body-parser');


const app = express()

const people = [];

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).json({'something_else':'All people fetched', 'data': people});
  });

app.post('/people', (req, res) => {
    const person = req.body;
    people.push(person)
    res.status(201).json({'message':"person created", 'data': people[people.length -1]})
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });


module.exports = app;