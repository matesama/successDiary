const DoneTickBox = ({taskItem, tasks, setTasks}) => {

    const handleCheckBox = () => {
        
         const newTasks = tasks.map(task=>{
            
            if(taskItem.id === task.id) {
                return {...task, done: !task.done };
            } 
            return task;

        })

        setTasks(newTasks);
    }

    return <input type="checkBox" className="doneTickBox" onClick={handleCheckBox} />;
    
}

export default DoneTickBox;
