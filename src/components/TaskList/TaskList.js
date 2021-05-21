import './TaskList.css';
import React from 'react'
import Task from '../Task/Task';
import {Dots} from '../Dots/Dots';
import { useSelector} from 'react-redux';

const TaskList = ({ setCurrentId, currentUser }) => {
    const tasks = useSelector((state) => state.tasks);

    return (
        <div className='task-list'>
            {
                !tasks.length ? <Dots /> :
                    currentUser ?
                    tasks.filter((task) => task.createdBy === currentUser._id).map((task) => (
                        <Task key={task._id} task={task} setCurrentId={setCurrentId} />
                    )):
                <div>
                    <p>Login</p>
                </div>
            }
        </div>
    )
}

export default TaskList
