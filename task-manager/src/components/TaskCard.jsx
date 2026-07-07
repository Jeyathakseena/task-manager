import { Button } from './ui/button';
import { Card } from './ui/card';

const statusStyles = {
  "todo": "bg-gray-100 text-gray-700",
  "in-progress": "bg-blue-100 text-blue-700",
  "completed": "bg-green-100 text-green-700",
};

const statusLabels = {
  "todo": "To Do",
  "in-progress": "In Progress",
  "completed": "Completed",
};

function TaskCard({ task, onDelete, onStatusChange, onView }) {
  return (
    <Card className="flex justify-between items-center p-4 mb-3 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3">
        <span className="font-medium">{task.title}</span>
        <span className={`text-xs px-2 py-1 rounded-full ${statusStyles[task.status]}`}>
          {statusLabels[task.status]}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task._id, e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <Button variant="outline" onClick={() => onView(task)}>View</Button>
        <Button variant="destructive" onClick={() => onDelete(task._id)}>Delete</Button>
      </div>
    </Card>
  );
}

export default TaskCard;