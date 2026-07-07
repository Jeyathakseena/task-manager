import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

function TaskDetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const task = state?.task;

  if (!task) return <p className="p-4">No task data available. Go back and click View again.</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <Card className="w-full max-w-lg p-8 shadow-2xl rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Task Detail</h2>
        <p><strong>ID:</strong> {task._id}</p>
        <p><strong>Title:</strong> {task.title}</p>
        <p><strong>Status:</strong> {task.status}</p>
      </Card>
      <Button className="mt-4" onClick={() => navigate('/')}>Back to List</Button>
    </div>
  );
}

export default TaskDetailPage;