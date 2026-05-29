import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../Store/todoSlice';
import Task from './Task';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.todoApp);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(t => {
    if (filter === 'done') return t.isDone;
    if (filter === 'not') return !t.isDone;
    return true;
  });

  return (
    <div>
      <div className="filters">
        <button onClick={() => dispatch(changeFilter('all'))}>All</button>
        <button onClick={() => dispatch(changeFilter('done'))}>Done</button>
        <button onClick={() => dispatch(changeFilter('not'))}>Not Done</button>
      </div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;