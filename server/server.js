import Signupform from './signup';
import Loginform from './loginform';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const db = mysql.createConnection({
    user:"root@localhost",
    host:"localhost",
    password:"",
    database:"taskmanagerdb",
});

app.post("/signup", (req, res) => {
    db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)",
        [values.name,values.email,values.password],
        (err,result) => {
            console.log(err)
            }
        );
    }
);

app.post("", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    
    db.query(
        "SELECT * FROM users WHERE username= ? AND password =?",
        [username, password],
        (err,result) => {
            if (err) {
                res.send({err: err});
            }

            if (result) {
                res.send(result);
            } else {
                res.send({message: "Wrong username/password combination!"});
            }
        }
    );
});


app.listen(3001, ()=> {
    console.log('Running on port 3001')
})