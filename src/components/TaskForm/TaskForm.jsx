import { useState, useContext, useEffect } from 'react';
import { TaskListContext } from '../../context/TaskListContext';

const TaskForm = () => {
  const [title, setTitle] = useState('');

  const { addTask, clearTaskList, editItem, editTask } =
    useContext(TaskListContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
      setTitle('');
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="...Add Task..."
        className="task-input"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div className="buttons">
        <button className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button onClick={() => clearTaskList()} className="btn clear-btn">
          Clear Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;