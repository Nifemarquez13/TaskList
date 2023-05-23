import Header from "./components/header";
import Task from "./components/Task";
import "./App.css";
import AddTask from "./components/AddTask"



function App() {

  return (
    <div className="App">
      <Header />

      <AddTask />

      <Task />

    </div>
  );
}

export default App;
