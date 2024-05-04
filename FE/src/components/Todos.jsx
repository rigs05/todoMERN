const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h3>{todo.title}</h3>
            <h5>{todo.description}</h5>
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
