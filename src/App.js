import './index.css';
import Todo from "./components/Todo";
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Counter from './components/Counter';

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [count, setCount] = useState(props.tasks.length);

  function addTask(name){
    const newTask = { id: "todo-"+nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
    setCount(count + 1);
  }


  return (
    <div className="todoapp stack-large">
      <h1>Todo Application</h1>
      <Form onAddTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton name="all" pressed={true}/>
        <FilterButton name="active" pressed={false}/>
        <FilterButton name="completed" pressed={false}/>
      </div>
      <Counter count={count}/>
      {/* Todo List */}
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {tasks.map(task =>
          <Todo key={task.id} name={task.name} completed={task.completed} id={task.id} />
        )}
      </ul>
    </div>
  );
}

export default App;
