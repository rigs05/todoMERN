import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  // Wrong way to fetch as it'll send infinite requests to BE due to setTodos
  // use useEffect hook for optimal usage
  // const fetchFunction = async () => {
  //   await fetch("http://localhost:5001/todos").then((res) => {
  //     const json = res.json();
  //     console.log("The todo list is: " + json);
  //     setTodos(json.todos);
  //   });
  // };
  useEffect(() => {
    fetch("http://localhost:5001/todos")
      .then(async (res) => await res.json())
      .then((data) => {
        console.log("The data is: " + data);
        setTodos(data);
      });
  }, []);

  // fetchFunction();

  return (
    <>
      <AddTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
