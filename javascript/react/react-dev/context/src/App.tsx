import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";

function App() {
  return (
    <TasksProvider>
      <h1>Tasks</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

export default App;
