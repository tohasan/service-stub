const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('I am a stub service!');
});

app.get('/welcome', (req, res) => {
    res.send('welcome');
});

const server = app.listen(port, () => {
    console.log(`Stub service is listening at http://localhost:${port}`);
});

process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: stopping the stub service');

    server.close(() => {
        console.log('The stub service is stopped');
    });
});

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});