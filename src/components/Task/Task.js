import React from 'react'
import moment from 'moment'
import './Task.css'
import { deleteTask } from '../../actions/tasks'
import { useDispatch } from 'react-redux';
import recurring from '../../images/recurring.png';

const Task = ({ task, setCurrentId }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task._id))
        setCurrentId(null);
    }

    return (
        <div className='task' onClick={() => setCurrentId(task._id)}>
            <div className='task-ribbon-header'>
                <div className='task-ribbon-dueDate'>
                    {task.recurringEvery === '' ? moment(task.dueDate).fromNow() : <img className='recurring-img' src={recurring} alt='recurring' />}
                    {task.recurringEvery === '' ? null : task.recurringEvery}
                </div>
                <img src="https://img.icons8.com/fluent/48/000000/delete-sign.png" className='delete-btn' alt='' onClick={handleDelete}/>
            </div>
            <p className='task-ribbon-title'>{task.title}</p>
        </div>
    )
}

export default Task
