const zod = require('zod');


const createTodo = zod.object({
    title : zod.string().min(1,'please enter the title'),
    description : zod.string().min(1,'please enter the descreption')
});

const updateTodo = zod.object({
    id : zod.string().min(1,'please enter the id of the todo for updation')
});

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}




