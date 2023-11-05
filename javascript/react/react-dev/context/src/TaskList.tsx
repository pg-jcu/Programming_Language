import { useState } from "react";
import { Task, useTasks, useTasksDispatch } from "./TasksContext";

interface TaskProps {
  task: Task;
}

const Task = ({ task }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch &&
            dispatch({
              type: "CHANGED",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
        }}
      />
      {isEditing ? (
        <>
          <input
            value={task.text}
            onChange={(e) => {
              dispatch &&
                dispatch({
                  type: "CHANGED",
                  task: {
                    ...task,
                    text: e.target.value,
                  },
                });
            }}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      ) : (
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button
        onClick={() => {
          dispatch &&
            dispatch({
              type: "DELETED",
              id: task.id,
            });
        }}
      >
        Delete
      </button>
    </label>
  );
};

const TaskList = () => {
  const tasks = useTasks();

  return (
    <ul>
      {tasks?.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
