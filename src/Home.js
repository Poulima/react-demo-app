import { Link } from "react-router-dom";
import './App.css';

function Home() {
    return (
    <div className="wrapper">
        <h2>React Learning</h2>
      <Link to="context" target="new"> Context Example</Link>
      <Link to="chatRoom" target="new"> Chat Room</Link>
      <Link to="domManipulation" target="new"> Dom Manipulation</Link>
      <Link to="reducer" target="new"> TODO List with Reducer</Link>
      <Link to="reducerWithContext" target="new"> TODO List with Reducer and Context</Link>
    </div>
    )

}

export default Home;