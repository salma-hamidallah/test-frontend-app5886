import axios from 'axios';

const taskAxios = axios.create({
  baseURL: 'http://localhost/tasks', 
});

export const fetchTasks = async () => {
  try {
    const response = await taskAxios.get('');
    return response.data;  
    console.log(response);
  } catch (error) {
    throw new Error('Erreur de récupération des tâches : ' + error.message);
  }
};














