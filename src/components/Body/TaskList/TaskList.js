import './TaskList.css';
import React from 'react'
import Task from '../Task/Task';
import {Dots} from '../../Dots/Dots';
import { useSelector} from 'react-redux';

const TaskList = ({ setCurrentId }) => {
    const tasks = useSelector((state) => state.tasks);
    console.log(tasks);

    return (
        <div className='task-list'>
            {
                !tasks.length ? <Dots /> :
                tasks.map((task) => (
                    <Task key={task._id} task={task} setCurrentId={setCurrentId} />
                ))
            }
            <div className='addTask-btn'>
                <h1>+</h1>
            </div>
        </div>
    )
}

export default TaskList
