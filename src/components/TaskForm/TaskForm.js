import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask } from '../../actions/tasks';
import './TaskForm.css';


const TaskForm = ({ currentId, setCurrentId, currentUser }) => {
    const [taskData, setTaskData] = useState({
        title: '', description: '', details: '', assignedTo: '', createdBy: '', dueDate: '', recurringEvery: '', priorityOneToTen: '', project: '', closedDate: '', closedBy: '', theme: ''
    })
    const task = useSelector((state) => currentId ? state.tasks.find((t) => t._id === currentId) : null);
    
    const dispatch = useDispatch()

    useEffect(() => {
        if(task) setTaskData(task)
    }, [task])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(currentId) 
            dispatch(updateTask(currentId, taskData));
        else
            dispatch(createTask({...taskData, createdBy: currentUser._id}));
        clear()
    }

    const clear = () => {
        setCurrentId(null);
        setTaskData({ title: '', description: '', details: '', assignedTo: '', createdBy: '', dueDate: '', recurringEvery: '', priorityOneToTen: '', project: '', closedDate: '', closedBy: '', theme: '' })
    }


    return (
        <div className='task-form'>
            <form autoComplete='off' className='form' onSubmit={handleSubmit}>
                {/* <h1 className='task-title-header'>{task ? null : 'TASK FORM'}</h1> */}
                <div className='input-group-task title'>
                    <label>Title:</label>
                    <input type='text' id='title' name='title' placeholder='task title' value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })} />
                </div>
                <div className='input-group-task desc'>
                    <label>Description:</label>
                    <input type='text' id='description' name='description' placeholder='description' value={taskData.description} onChange={(e) => setTaskData({ ...taskData, description: e.target.value })} />
                </div>
                <div className='input-group-task assignedTo'>
                    <label>Assigned to:</label>
                    <input type='text' id='assignedTo' name='assignedTo' placeholder='assign to whom?' value={taskData.assignedTo} onChange={(e) => setTaskData({ ...taskData, assignedTo: e.target.value })} />
                </div>
                <div className='input-group-task dueDate'>
                    <label>Due date:</label>
                    <input type='datetime-local' id='dueDate' name='dueDate' value={taskData.dueDate} onChange={(e) => setTaskData({ ...taskData, dueDate: e.target.value })} />
                </div>
                <div className='input-group-task recurringEvery'>
                    <label>Recurring every:</label>
                    <input type='text' id='recurringEvery' name='recurringEvery' placeholder='recurring every' value={taskData.recurringEvery} onChange={(e) => setTaskData({ ...taskData, recurringEvery: e.target.value })} />
                </div>
                <div className='input-group-task priority'>
                    <label>Priority (1-10):</label>
                    <input type='text' id='priorityOneToTen' name='priorityOneToTen' placeholder='priority (1 - 10)' value={taskData.priorityOneToTen} onChange={(e) => setTaskData({ ...taskData, priorityOneToTen: e.target.value })} />
                </div>
                <div className='input-group-task project'>
                    <label>Project:</label>
                    <input type='text' id='project' name='project' placeholder='project' value={taskData.project} onChange={(e) => setTaskData({ ...taskData, project: e.target.value })} />
                </div>
                {/* <div className='input-group-task createdBy'>
                    <label>Created by:</label>
                    <input type='text' id='createdBy' name='createdBy' placeholder='created by' value={currentUser ? currentUser._id : taskData.createdBy}  />
                </div> */}
                <div className='input-group-task closedDate'>
                    <label>Closed date:</label>
                    <input type='datetime-local' id='closedDate' name='closedDate' placeholder='closed date' value={taskData.closedDate} onChange={(e) => setTaskData({ ...taskData, closedDate: e.target.value })} />
                </div>
                <div className='input-group-task closedBy'>
                    <label>Closed by:</label>
                    <input type='text' id='closedBy' name='closedBy' placeholder='closed by' value={taskData.closedBy} onChange={(e) => setTaskData({ ...taskData, closedBy: e.target.value })} />
                </div>
                <div className='input-group-task '>
                    <label>Theme:</label>
                    <input type='text' id='theme' name='theme' placeholder='theme' value={taskData.theme} onChange={(e) => setTaskData({ ...taskData, theme: e.target.value })} />
                </div>
                <div className='input-group-task-textarea details'>
                    <label>Details:</label>
                    <textarea id='details' name='details' placeholder='details' value={taskData.details} onChange={(e) => setTaskData({ ...taskData, details: e.target.value })} />
                </div>
                <div>
                    <button className='btn-submit' type='submit' onClick={handleSubmit}>Submit</button>
                    <button className='btn-clear' type='reset' onClick={clear}>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm
