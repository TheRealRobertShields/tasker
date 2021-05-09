import './Body.css'
import React, { useState } from 'react'
import TaskList from './TaskList/TaskList'
import TaskForm from './TaskForm/TaskForm'

const Body = () => {
    const [currentId, setCurrentId] = useState(null);
    return (
        <div className='body'>
            <div className='body-pane'>

                <TaskList setCurrentId={setCurrentId} />
                
            </div>

            <TaskForm currentId={currentId} setCurrentId={setCurrentId} />

            
        </div>
    )
}

export default Body
