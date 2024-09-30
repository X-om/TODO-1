export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h5>{todo.description}</h5>
                <button>{todo.completed == "true" ? "completed" : "mark as complete"}</button>
            </div>
        })}
    </div>
}