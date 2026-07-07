import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-black px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-10">
      <nav className="flex items-center gap-2">
        <h1 className="text-xl font-semibold tracking-tight text-white">Task Manager</h1>
      </nav>
      <Button
        onClick={handleLogout}
        className="bg-white text-black hover:bg-gray-200"
      >
        Logout
      </Button>
    </header>
  );
}

export default Header;