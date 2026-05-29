import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>My ToDo List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;