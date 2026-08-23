import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearCompleted, toggleTodo } from './app/todoSlice';
import StatusModal from './components/StatusModal';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const handleAddTodo = () => {

    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setStatus({ type: 'error', message: 'Please enter a task before adding.' });
      return;
    }
debugger;
    dispatch(addTodo(trimmedInput));
    setInput('');
    setStatus({ type: 'success', message: 'Task added successfully.' });
  };

  const handleToggle = (id) => {
    console.log('Toggling todo id:', id);
    dispatch(toggleTodo(id));
  };

  const handleClearCompleted = () => {
    console.log('Clearing completed tasks');
    dispatch(clearCompleted());
  };

  return (
    <div className="app-shell">
      <StatusModal
        type={status.type}
        message={status.message}
        onClose={() => setStatus({ type: '', message: '' })}
      />

      <h1>Redux Debug Sandbox</h1>
      <h1>Redux........................</h1>
      <p>Open the console and Redux DevTools to trace state changes.</p>

      <div className="controls">
        <label htmlFor="todo-input">New task</label>
        <input
          id="todo-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Type a task"
        />
        <button type="button" onClick={handleAddTodo}>
          Add task
        </button>
        <button type="button" className="secondary" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'done' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
