import './App.css';

//context
import TodolistProvider from './contexts/TodolistProvider';

//component
import Addtodo from './components/Addtodo';
import Showstodo from './components/Showstodo';

function App() {
  return (
    <div className="min-h-screen text-center bg-stone-200 px-8 py-2">
      <TodolistProvider>
        <Addtodo />
        <Showstodo />
      </TodolistProvider>
    </div>
  );
}

export default App;
