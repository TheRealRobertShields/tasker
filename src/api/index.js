import axios from 'axios';

const task_url = 'http://localhost:5000/tasks';

export const fetchTasks = () => axios.get(task_url)

export const createTask = (newTask) => axios.post(task_url, newTask)

export const updateTask = (id, updatedTask) => axios.patch(`${task_url}/${id}`, updatedTask)

export const deleteTask = (id) => axios.delete(`${task_url}/${id}`)


const user_url = 'http://localhost:5000/users';

export const fetchUsers = () => axios.get(user_url)

export const createUser = (newUser) => axios.post(user_url, newUser)

export const updateUser = (id, updatedUser) => axios.patch(`${user_url}/${id}`, updatedUser)

export const deleteUser = (id) => axios.delete(`${user_url}/${id}`)


