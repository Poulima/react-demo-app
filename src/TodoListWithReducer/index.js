import { useReducer } from 'react';
import AddItem from './AddItem.js';
import TaskList from './TaskList.js';
import tasksReducer from './tasksReducer.js';

export default function TaskAppTaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  console.log(tasks)
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    console.log(task)
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddItem addItem={handleAddTask} />
      <TaskList
        tasks={tasks}
        editTask={handleChangeTask}
        deleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];
