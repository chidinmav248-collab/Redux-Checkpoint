import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Store/todoSlice';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title && desc) {
      dispatch(addTask({ title: title, description: desc }));
      setTitle('');
      setDesc('');
    }
  };

  return (
    <div className="add-task-form">
      <input 
        type="text" 
        placeholder="Task Title..." 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        placeholder="Add a detailed description..." 
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;