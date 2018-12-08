var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    },
    {
        id: 2,
        todo: "Implement a REST API"
    },
    {
        id: 3,
        todo: "last one"
    }
];

// GET /api/todos
app.get('/api/todos', function(req, res, next) {
    res.send(todoList);      
});

// GET /api/todos/:id
app.get('/api/todos/:id', function(req, res, next) {
    res.send(todoList[req.params.id]);
});

// POST /api/todos
app.post('/api/todos/', function(req, res) {
    todoList.push(req.body)
    res.send(todoList);
 });

// PUT /api/todos/:id
app.put('/api/todos/:id', function(req, res, next) {
    todoList[req.params.id] = req.body;
    res.send(todoList);
});

// DELETE /api/todos/:id
app.delete('/api/todos/:id', function(req, res, next) {
    var index = req.params.id;
    todoList.splice(index, 1);
    res.send(todoList);
});

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
});