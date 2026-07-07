import axios from 'axios';

const API_URL = "http://localhost:5000/api/tasks";

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (title) => {
  const response = await axios.post(API_URL, { title });
  return response.data;
};

export const deleteTaskAPI = async (id) => {
  await axios.delete(API_URL + "/" + id);
};

export const updateTaskAPI = async (id, status) => {
  const response = await axios.put(API_URL + "/" + id, { status });
  return response.data;
};