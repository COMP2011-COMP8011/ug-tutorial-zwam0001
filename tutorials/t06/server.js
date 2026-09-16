import express from 'express';
app.use(express.json());

const app = express();
let students = [
{id: 1, name: "Ada Lovelace", major: "Mathematics" },
    {id: 2, name: "Alan Turing", major: "Computer Science"}
];


const PORT = 5100;
app.listen(PORT);