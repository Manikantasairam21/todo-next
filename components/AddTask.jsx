"use client";
import { addTodo } from "@/lib/todos";
import { useState } from "react";

function AddTask(props) {
  // const { setTodos } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) return;
    // const newTodos =
    await addTodo(name, description);
    // setTodos(newTodos.data);
    setName("");
    setDescription("");
  };
  return (
    <div className="flex flex-col items-center gap-2 shadow-xs py-4">
      <h1 className="font-bold text-4xl">Add Task</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center w-full"
      >
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-1/4 border p-2 rounded"
        />
        <textarea
          rows={3}
          placeholder="Task Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="w-1/4 border p-2 rounded"
        />
        <button
          type="submit"
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTask;

// https://github.com/exewhyz/react-tut
