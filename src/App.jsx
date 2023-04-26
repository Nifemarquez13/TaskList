import Header from "./components/header";
import { Tasklist } from "./Tasklist";
import Task from "./components/Task";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Task List={Tasklist}/>
    </div>
  );
}

export default App;
