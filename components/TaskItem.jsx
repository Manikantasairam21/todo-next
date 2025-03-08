"use client";
import { deleteTodo, updateTodo } from "@/lib/todos";
import { Trash2 } from "lucide-react";

function TaskItem(props) {
  // const { setTodos } = props;
  const handleChecked = async (e) => {
    const updatedTodos = await updateTodo(
      props.task.id,
      !props.task?.completed
    );
    // setTodos(updatedTodos.data);
  };
  const handleDelete = async () => {
    const updatedTodos = await deleteTodo(props.task?.id);
    // setTodos(updatedTodos.data);
  };
  return (
    <div className="w-full max-w-sm mx-auto bg-gray-800 rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={props.task.completed}
            onChange={handleChecked}
            className="accent-blue-500 rounded-full w-5 h-5 cursor-pointer"
          />
          <h2 className="text-xl font-semibold text-white">
            {props.task?.name}
          </h2>
        </div>
        <Trash2
          className="text-red-500 cursor-pointer transition-all hover:text-red-600"
          size={20}
          onClick={handleDelete}
        />
      </div>
      <p className="text-gray-400 mt-2">{props.task?.description}</p>
    </div>
  );
}

export default TaskItem;
