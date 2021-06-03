import './App.css';
import Posts from './components/Posts';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList/>
      <Posts/>
    </div>
  );
}

export default App;
