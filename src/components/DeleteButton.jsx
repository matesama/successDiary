const DeleteButton = ({taskItem, tasks, setTasks}) => {
    console.log(taskItem);
    const handleDeleteButton = (id) => {
        setTasks(tasks => {
           
            return tasks.filter(taskItem => taskItem.id !== id);
        })

    }
    
    
    return <button type="button" className="deleteButton" onClick={()=>handleDeleteButton(taskItem.id)}>Delete</button>;


}

export default DeleteButton;