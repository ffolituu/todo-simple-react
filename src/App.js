import './index.css';
import Todo from "./components/Todo";
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name){
    const newTask = { id: "todo-"+nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form onAddTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton name="all" pressed={true}/>
        <FilterButton name="active" pressed={false}/>
        <FilterButton name="completed" pressed={false}/>
      </div>
      {/* Counter */}
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
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
