import Header from "./components/header";
import { Tasklist } from "./Tasklist";
import Task from "./components/Task";
import "./App.css";
import AddTask from "./components/AddTask"



function App() {

  return (
    <div className="App">
      <Header />
      <AddTask />
      
      <Task List={Tasklist} />
    </div>
  );
}

export default App;
