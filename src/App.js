import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clearCompleted, toggleTodo } from './app/todoSlice';
import StatusModal from './components/StatusModal';
import './App.css';

// function App() {
//   const [input, setInput] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [status, setStatus] = useState({ type: '', message: '' });
//   const [events, setEvents] = useState([]);
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos.items);

//   const completedCount = todos.filter((todo) => todo.completed).length;
//   const visibleTodos = useMemo(() => {
//     if (filter === 'active') {
//       return todos.filter((todo) => !todo.completed);
//     }

//     if (filter === 'completed') {
//       return todos.filter((todo) => todo.completed);
//     }

//     return todos;
//   }, [filter, todos]);

//   const recordEvent = (action, details) => {
//     setEvents((currentEvents) => [
//       { action, details, id: Date.now() },
//       ...currentEvents,
//     ].slice(0, 6));
//   };

//   const handleAddTodo = () => {
//     debugger;
//     const trimmedInput = input.trim();

//     if (!trimmedInput) {
//       setStatus({ type: 'error', message: 'Please enter a task before adding.' });
//       recordEvent('validationFailed', 'Empty task rejected');
//       return;
//     }

//     dispatch(addTodo(trimmedInput));
//     recordEvent('addTodo', 'Task payload accepted by reducer');
//     setInput('');
//     setStatus({ type: 'success', message: 'Task added successfully.' });
//   };

//   const handleToggle = (id) => {
//     dispatch(toggleTodo(id));
//     recordEvent('toggleTodo', 'Todo state changed');
//   };

//   const handleClearCompleted = () => {
//     dispatch(clearCompleted());
//     recordEvent('clearCompleted', `${completedCount} completed task(s) removed`);
//   };

//   const handleSimulateError = () => {
//     try {
//       throw new Error('Practice error: inspect this stack trace in DevTools.');
//     } catch (error) {
//       console.error(error);
//       recordEvent('errorHandled', error.message);
//       setStatus({ type: 'error', message: 'Error caught. Check the console for its stack trace.' });
//     }
//   };

//   return (
//     <div className="app-shell">
//       <StatusModal
//         type={status.type}
//         message={status.message}
//         onClose={() => setStatus({ type: '', message: '' })}
//       />

//       <header className="app-header">
//         <div>
//           <p className="eyebrow">Learning lab</p>
//           <h1>Redux Debug Sandbox</h1>
//           <p>Change state, inspect events, and practice following a bug from the UI to the reducer.</p>
//         </div>
//         <button type="button" className="debug-button" onClick={handleSimulateError}>
//           Simulate caught error
//         </button>
//       </header>

//       <div className="controls">
//         <label htmlFor="todo-input">New task</label>
//         <input
//           id="todo-input"
//           value={input}
//           onChange={(event) => setInput(event.target.value)}
//           placeholder="Type a task"
//         />
//         <button type="button" onClick={handleAddTodo}>
//           Add task
//         </button>
//         <button type="button" className="secondary" onClick={handleClearCompleted}>
//           Clear completed ({completedCount})
//         </button>
//       </div>

//       <section className="debug-grid" aria-label="Debugging information">
//         <div className="panel">
//           <div className="panel-heading">
//             <h2>Tasks</h2>
//             <div className="filter-buttons" aria-label="Filter tasks">
//               {['all', 'active', 'completed'].map((option) => (
//                 <button
//                   key={option}
//                   type="button"
//                   className={filter === option ? 'selected' : 'secondary'}
//                   onClick={() => setFilter(option)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="stats" aria-label="Task statistics">
//             <span><strong>{todos.length}</strong> total</span>
//             <span><strong>{todos.length - completedCount}</strong> active</span>
//             <span><strong>{completedCount}</strong> done</span>
//           </div>
//           <ul className="todo-list">
//             {visibleTodos.map((todo) => (
//           <li key={todo.id} className={todo.completed ? 'done' : ''}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleToggle(todo.id)}
//             />
//             <span>{todo.text}</span>
//           </li>
//             ))}
//           </ul>
//           {visibleTodos.length === 0 && <p className="empty-state">No tasks match this filter.</p>}
//         </div>

//         <div className="panel event-panel">
//           <div className="panel-heading">
//             <h2>Event log</h2>
//             <span className="hint">latest 6</span>
//           </div>
//           {events.length === 0 ? (
//             <p className="empty-state">Interact with a task to see the event flow.</p>
//           ) : (
//             <ol className="event-list">
//               {events.map((event) => (
//                 <li key={event.id}>
//                   <code>{event.action}</code>
//                   <span>{event.details}</span>
//                 </li>
//               ))}
//             </ol>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;

function App() {
return (
    <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:'20px',placeItems:'center'}}>
    <div style={{ display:'grid',backgroundColor:'lightblue',width:'100%',height:'100vh'}}>
      <p>Hello1</p>
    <p>Hello2</p>
    <p>Hello3</p>
    <p>Hello2</p>
    <p>Hello3</p>
    </div>
    <div>
      <p>Hello1</p>
    </div>
    </div>
)
}

  export default App;