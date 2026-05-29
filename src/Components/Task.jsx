import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../Store/todoSlice';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.description);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(editTask({ id: task.id, description: newText }));
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <div className="task-body">
        {isEditing ? (
          <input 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
            className="edit-input"
          />
        ) : (
          <div className="task-info">
             <span 
               className={task.isDone ? 'done' : ''} 
               onClick={() => dispatch(toggleTask(task.id))}
             >
               {task.title}
             </span>

             {task.extraDescription && <p className="desc-text">{task.description}</p>}
          </div>
        )}
      </div>
      
      <div className="task-actions">
        <button onClick={isEditing ? handleUpdate : () => setIsEditing(true)}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default Task;