import { createContext, useState } from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [editItem, setEditItem] = useState('');

  const addTask = title => {
    setTasks([...tasks, { title, id: Math.random() }]);
  };

  const clearTaskList = () => {
    setTasks([]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const findItem = id => {
    const item = tasks.find(task => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task));
    setTasks(newTasks);
    setEditItem('');
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        editItem,
        addTask,
        removeTask,
        clearTaskList,
        findItem,
        editTask,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;