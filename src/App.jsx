import Header from "./components/header";
import { taskLists } from "./taskLists";
import Task from "./components/Task";
import "./App.css";
import AddTask from "./components/AddTask"



function App() {

  return (
    <div className="App">
      <Header />

      <AddTask />

      <Task list={taskLists} />

    </div>
  );
}

export default App;
