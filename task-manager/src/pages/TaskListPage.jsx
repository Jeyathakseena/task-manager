import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { fetchTasks, createTask, deleteTaskAPI, updateTaskAPI } from '../api/tasks';

function TaskListPage() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);

  const handleAddTask = async (title) => {
    const newTask = await createTask(title);
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = async (id) => {
    await deleteTaskAPI(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleStatusChange = async (id, newStatus) => {
  const updated = await updateTaskAPI(id, newStatus);
  setTasks(tasks.map((t) => (t._id === id ? updated : t)));
  };

  return (
    <div>
      <Header />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onStatusChange={handleStatusChange}
        onView={(task) => navigate(`/task/${task._id}`, { state: { task } })}
      />
    </div>
  );
}

export default TaskListPage;
