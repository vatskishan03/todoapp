// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { CreateTodo } from './components/CreateTodo'
// import { Todos } from './components/Todos'

// function App() {

//   const [todos, setTodos]= useState([]);

//   fetch("http://localhost:3000/todos")
//   .then(async function(res){
//     const json =await res.json();
//     setTodos(json.Todos);
//   })

//   return (
//       <div>
//         <CreateTodo></CreateTodo>
//         <Todos> todos={[
//           {
//             title: "kv",
//             description: "intelligent",
//             completed: false 
//           }
//         ]}</Todos>
//       </div>
//   )
// }

// export default App


import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.Todos);
      })
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;