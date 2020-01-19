const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const data = [];

const app = require('express')()

//express middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))
console.log('Express ready!')

//routes
app.get('/data', (req, res) => {
    res.status(200).json(data);
});

app.post('/company/add', (req, res) => {
    data.push(req.body);
    return res.status(200).json({ success: true, companies: data })
});

app.post('/company/delete', (req, res) => {
    data.splice(req.body.position, 1);
    return res.status(200).json({ success: true, companies: data })
});

app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
});

app.listen(5000)
console.log(`Server listening on port 5000...`)