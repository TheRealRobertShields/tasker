// eslint-disable-next-line
export default (tasks = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_TASKS':
            console.log('FETCH_ALL_TASKS')
            return action.payload;
        case 'CREATE_TASK':
            console.log('CREATE_TASK')
            return [...tasks, action.payload];
        case 'UPDATE_TASK':
            console.log('UPDATE_TASK')
            return tasks.map((task) => task._id === action.payload._id ? action.payload : task)
        case 'DELETE_TASK':
            console.log('DELETE_TASK')
            return tasks.filter((task) => task._id !== action.payload)
        default:
            return tasks;
    }
}