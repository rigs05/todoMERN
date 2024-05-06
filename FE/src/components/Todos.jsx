const Todos = ({ todos }) => {
  let count = 1;
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div id={count++}>
            {/* <id>{count++}</id> */}
            <h3>{todo.title}</h3>
            <h5>{todo.description}</h5>
            {/* render using onClick event */}
            <button>
              {todo.completed == true ? "Completed!" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
