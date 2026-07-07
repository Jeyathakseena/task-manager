import TaskCard from './TaskCard';

function TaskList({ tasks, onDelete, onStatusChange, onView }) {
  return (
    <div className="p-4">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
          onView={onView}
        />
      ))}
    </div>
  );
}

export default TaskList;