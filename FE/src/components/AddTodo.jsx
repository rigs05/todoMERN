const AddTodo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        style={{
          padding: 5,
          margin: 10,
        }}
        type='text'
        placeholder='Input Title'
      />

      <input
        style={{
          padding: 5,
          margin: 10,
        }}
        type='text'
        placeholder='Input Description'
      />

      <button
        style={{
          padding: 5,
          margin: 10,
        }}
        type='submit'
      >
        Add Todo
      </button>
    </div>
  );
};
export default AddTodo;
