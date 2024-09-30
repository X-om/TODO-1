import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos,setTodo] = useState([]);

  function getIt(){
    fetch("http://localhost:3000/todos").then(async function (todos){
    const json = await todos.json();
    setTodo(json.todos);
  })
  }

  setTimeout(getIt,10000);

  return <div>
      <CreateTodo/>
      <Todos todos={todos}/>
  </div>
}

export default App
