import './App.css';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className='flex w-screen min-h-screen'>
      <Sidebar />
      <Dashboard className='w-full'/>
  
    </div>
  );
}

export default App;
