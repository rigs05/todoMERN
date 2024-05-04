import { useState } from "react";

const AddTodo = () => {
  // Not-recommended- document.getElementById('title')
  // Optimal way- using React-query

  // Unoptimal but widely used way- Local State Variables
  // (this will send a new request with every input change)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <input
        style={{
          padding: 5,
          margin: 10,
        }}
        type='text'
        placeholder='Input Description'
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <button
        style={{
          padding: 5,
          margin: 10,
        }}
        type='submit'
        onClick={() => {
          fetch("http://localhost:5001/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async (res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const json = await res.json();
            console.log(json);
            alert("Todo added successfully.");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
export default AddTodo;
