// import {useState, useEffect} from "react";

const EditButton = ({editingState, setEditingState}) => {
    
    
    const handleEditButton = () => {
        setEditingState(true);
    }
    
    console.log(editingState)
    
    return <button type="button" className="editButton" onClick= {handleEditButton}>Edit</button>;
}

export default EditButton;