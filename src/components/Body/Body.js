import './Body.css'
import React, { useState } from 'react'
import TaskList from '../TaskList/TaskList'
import TaskForm from '../TaskForm/TaskForm'
import LoginForm from '../LoginForm/LoginForm'

const Body = ({ currentUser, setCurrentUser, screenContent, setScreenContent }) => {
    const [currentId, setCurrentId] = useState(null);

    // const openTaskForm = () => {
    //     document.querySelector('.task-form').style.display = 'block';
    //     document.querySelector('.login-form').style.display = 'none';
    // }
    // const openUserForm = () => {
    //     document.querySelector('.task-form').style.display = 'none';
    //     document.querySelector('.login-form').style.display = 'block';
    // }


    return (
        <div className='body'>
            <div className='body-pane'>

                <TaskList setCurrentId={setCurrentId} currentUser={currentUser} />
            </div>
            <TaskForm currentId={currentId} setCurrentId={setCurrentId} currentUser={currentUser} />
            <LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} />

            {/* <div className='addTask-btn' onClick={openTaskForm} >
                <h1>+</h1>
            </div>

            <div className='addUser-btn' onClick={openUserForm} >
                <h1>+</h1>
            </div> */}
            
        </div>
    )
}

export default Body
