import { useState } from "react";
export default function TaskList(props) {
    return (
        <ul className="itemStyle">
        {props.tasks.map((task) =>
          <Item key={task.id} task={task} editTask={props.editTask} deleteTask={props.deleteTask} />
        )}
        </ul>
    )
}

function Item(props){
    const [edit, setEdit] = useState(false);

    const { task } = props;

    return (
        <li>
            {edit ? <input value={task.text} onChange={(e) => props.editTask({...task, text: e.target.value})} /> : <span> {task.text} </span> }
            {edit ? <button onClick={() => setEdit(false)}> save </button> : <button onClick={() => setEdit(true)}> Edit</button>}
            <button onClick={() => props.deleteTask(task.id)}> Delete </button>
        </li>
    )
}