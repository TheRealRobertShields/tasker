import React from 'react'
import moment from 'moment'
import './Task.css'
import { deleteTask } from '../../../actions/tasks'
import { useDispatch } from 'react-redux';
import recurring from '../../../images/recurring.png';

const Task = ({ task, setCurrentId }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task._id))
        setCurrentId(null);
    }

    return (
        <div className='task' onClick={() => setCurrentId(task._id)}>
            <div className='task-ribbon-header'>
                <div className='task-ribbon-txt-sm'>
                    {task.recurringEvery === '' ? moment(task.dueDate).fromNow() : <img className='recurring-img' src={recurring} alt='recurring' />}
                    {task.recurringEvery === '' ? null : task.recurringEvery}
                </div>
            </div>
            <h1 className='task-ribbon-txt-lg'>{task.title}</h1>
            <p className='task-ribbon-txt-md'>{task.description}</p>
            <img src="https://img.icons8.com/fluent/48/000000/delete-sign.png" className='delete-btn' alt='' onClick={handleDelete}/>
        </div>
    )
}

export default Task
