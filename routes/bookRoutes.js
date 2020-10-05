const express = require("express");
const app = express.Router();

const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const db = lowdb(new FileSync('./db/db.json'))



// Set some defaults (required if your JSON file is empty)
db.defaults({ books: []})
  .write()

// Add a post
// db.get('loans')
//   .push({ name: 'some', time: 'lowdb is awesome'})
//   .write()

  

app.get('/', (req,resp) => {
    const books = db.get("books").value();
    resp.status(200).json({
        data:books
    });
})


// app.get('/loans', (req,resp) => {
//     const books = db.get("loans").value();
//     resp.status(200).json({
//         data:books
//     });
// })

app.post('/loans/:id', (req, resp) => {
    const id = Number(req.params.id);
    let book = db.get('books').find({id:id})
    book.assign({status: true}).write();

    let loan = {name: req.body.name, timestamp: new Date().toLocaleDateString()};
    book.assign({loan}).write();

    return resp.redirect('http://localhost:3000/bookDetail/'+id);
    
})

app.get('/delete/:id', (req, resp) => {
    const id = Number(req.params.id);
    let book = db.get('books').find({id:id})
    book.assign({status: false}).write();

    let loan = {};
    book.assign({loan}).write();
    return resp.redirect('http://localhost:3000/bookDetail/'+id);
})


app.get('/bookDetail/:id', (req, resp) => {
    const book = db.get("books").find({id:Number(req.params.id)}).value();
    resp.status(200).json({
        data:book
    });
})

module.exports = app;