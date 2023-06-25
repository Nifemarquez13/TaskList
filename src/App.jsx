import Header from "./components/header";
import Task from "./components/Task";
import "./App.css";
import useLocalStorageData from "./hooks/useLocalStorageData";
import AddTask from "./components/AddTask";



function App() {

  const {taskData, deleteTask, addTask, selectTaskUpdate, updateTask, completeTask}  = useLocalStorageData();
  return (
    <div className="App">
      <Header />
      <AddTask
        addTask = {addTask} 
        />
      <Task 
        taskData = {taskData}
        deleteTask = {deleteTask}
        selectTaskUpdate = {selectTaskUpdate}     
        updateTask = {updateTask}   
        addTask = {addTask} 
        completeTask = {completeTask}
        />

    </div>
  );
}

export default App;
