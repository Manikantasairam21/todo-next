// "use client";

// import { useState } from "react";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

function TaskList(props) {
  // const [todos, setTodos] = useState(props.todos);
  const { todos } = props;
  return (
    <div className="flex flex-col gap-4">
      <AddTask
      // setTodos={setTodos}
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Tasks</h1>
        <div className="flex gap-4 flex-wrap p-4 w-full items-center justify-center">
          {todos?.length > 0 ? (
            todos?.map((task, idx) => (
              <TaskItem
                key={idx}
                task={task}
                // setTodos={setTodos}
              />
            ))
          ) : (
            <div>No tasks</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskList;

//  https://github.com/exewhyz/todo-next
