import { useState } from "react";
export default function AddItem(props) {
    const [item, setItem] = useState(' ');

    const addItem = () => {
        setItem('');
        props.addItem(item)
    }

    return (
        <div className="addItemWrapper">
            <input value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={() => addItem(item)}>Add</button>
        </div>
    )
}
