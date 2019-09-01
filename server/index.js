    
const express = require("express");
const path = require("path");
const app = express();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const bodyParser = require("body-parser");

const adapter = new FileSync('db.json')
const db = low(adapter)

app.use(express.static(path.join(process.cwd(), "../")));
app.use(bodyParser.json());

app.get('/getcount', (req, res) => {
    let count = db.get('count').value();
    res.send({ 'count': count })
})
app.post("/dec", (req, res) => {
    let count = db.update('count', n => n - 1).write();
    let new_count = db.get('count').value();
    res.send({ 'count': new_count })
})
app.post("/inc", (req, res) => {
    let count = db.update('count', n => n + 1).write();
    let new_count = db.get('count').value();
    res.send({ 'count': new_count })
})
app.post("/setcount", (req, res) => {
    let count = db.update('count', n => n = req.body.count).write();
    let new_count = db.get('count').value();
    res.send({ 'count': new_count })
})

app.get("/index", (req, res) => {
  res.sendFile(path.join(process.cwd(), "../", "index.html"));
});
app.get("/index2", (req, res) => {
  res.sendFile(path.join(process.cwd(), "../", "index2.html"));
});

app.listen(3000);