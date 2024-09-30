const express = require("express");
const cors = require('cors');
const { createTodo } = require('./types');
const { updateTodo } = require('./types');
const { todo } = require("./DB");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

function createTodoValidation(req,res,next){
    const response = createTodo.safeParse(req.body);
    if(!response.success){
        const error = response.error.errors.map(err => ({
            msg : err.message
        }));
        return res.status(411).json({ error });
    }
    next();
    // put inside the database
}

async function store(req,res,next){
    const createPayload = req.body;
    try{
        await todo.create({
            title : createPayload.title,
            description : createPayload.description
        })
        next();
    } catch(err){
        return res.status(500).json({
            msg : "error while storing the data !"
        })
    }
    
}

app.post('/todo', createTodoValidation,store,function(req,res){
    res.send("created a todo");
    
});
app.get('/todos',async function(req,res){ 
    const todos = await todo.find({});
    res.json({
        todos
    })
    
});

function completedValidation(req,res,next){
    const response = updateTodo.safeParse(req.body);
    if(!response.success){
        const errors = response.error.errors.map(err => ({
            error : err.message
        }));
        return res.status(411).json({ errors });
    }
    next();
}

async function update(req,res,next){
    const payload = req.body;
    try{
        await todo.updateOne({_id: payload.id} , {
            completed : true
        });    
        next();
    } catch(err){
        return res.status(500).json({
            err
        })
    }
    
}

app.put('/completed',completedValidation,update,function(req,res){
    res.json({
        msg : "Todo marked as completed !"
    })
});

app.listen(port, function(){
    console.log(`this app is running on http://localhost:${port}`);
})
