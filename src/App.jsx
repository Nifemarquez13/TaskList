import Header from "./components/header";
import { taskLists } from "./taskLists";
import Task from "./components/Task";
import "./App.css";




function App() {

  return (
    <div className="App">
      <Header />
      <Task list={taskLists} />
    </div>
  );
}

export default App;
