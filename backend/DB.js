const mongoose = require('mongoose');
const { boolean } = require('zod');


mongoose.connect('mongodb+srv://om:Om%401032230472@cluster0.dwoqx.mongodb.net/week5').then(()=>{
    console.log(`connection successfull !`);
}).catch((err)=>{
    console.log(`error connecting to the mongoDB ${err}`);
});

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : {
        type : Boolean,
        default : false
    }
})

const todo =  mongoose.model('todos',todoSchema);

module.exports = {
    todo
}




