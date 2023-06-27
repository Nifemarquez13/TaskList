import Header from "./../components/Header"
import Task from "./../components/Task";
import useLocalStorageData from "./../hooks/useLocalStorageData";
import AddTask from "./../components/AddTask";


export function Tareas () {

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
};
