import Task from "./../components/Task";
import useLocalStorageData from "./../hooks/useLocalStorageData";
import AddTask from "./../components/AddTask";


export function Tareas () {

  const {taskData, deleteTask, addTask, selectTaskUpdate, updateTask, completeTask}  = useLocalStorageData();
  return (
    <div className="App">
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
