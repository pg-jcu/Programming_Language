import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface AddedAction extends Omit<Task, "done"> {
  type: "ADDED";
}

interface ChangedAction {
  type: "CHANGED";
  task: Task;
}

interface DeletedAction {
  type: "DELETED";
  id: Task["id"];
}

type Action = AddedAction | ChangedAction | DeletedAction;

const TasksContext = createContext<Task[] | null>(null);
const TasksDispatchContext = createContext<Dispatch<Action> | null>(null);

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => {
  return useContext(TasksContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTasksDispatch = () => {
  return useContext(TasksDispatchContext);
};

const tasksReducer = (tasks: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADDED": {
      const { id, text } = action;

      if (!id || !text) {
        throw new Error("please assign id and text.");
      }

      return [
        ...tasks,
        {
          id,
          text,
          done: false,
        },
      ];
    }
    case "CHANGED": {
      return tasks.map((task) => {
        if (task.id === action.task?.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "DELETED": {
      return tasks.filter((task) => task.id !== action.id);
    }
  }
};

const initialTasks: Task[] = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
