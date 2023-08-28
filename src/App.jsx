import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
import ToDoItems from "./components/ToDoItem";


function App() {
  //const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(""); 

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")

  if(savedTasks) {
    return JSON.parse(savedTasks);
  } else {
      return [];
  }

  }) 
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  

  /*useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if(savedTasks) {
       setTasks(JSON.parse(savedTasks));
    }
  }, []);*/

  
  

  const handleSubmit = (e) => {
    if (task === "") {
      return alert("please type a todo")
    } else { 
      e.preventDefault(); 
    //get ID
    let randomId = Math.random() * 100000;
    const taskItem = {id: randomId,
                      text: task,
                    done: false};
    setTasks([...tasks, taskItem]); 
    setTask("");
    }
  };

  

  return (
    <div className="Home">
       <a href='/'>
        <h1>TodoReact</h1>
      </a>  
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul className="list">
        {tasks.map((taskItem, index) => (
          <ToDoItems key={index}  taskItem={taskItem} tasks={tasks} setTasks={setTasks}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
