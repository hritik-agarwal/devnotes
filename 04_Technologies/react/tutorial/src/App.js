// Imports
import {useState, useEffect, useRef} from "react";
import "./App.css";
import Header from "./Header";
import Greeting from "./Greeting";
import {FaTrashAlt} from "react-icons/fa";

export default function App() {
  const API_URL = "http://localhost:3500/items";
  // useState Hook
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("");
  const [names, setNames] = useState([]);

  // useRef Hook
  const inputRef = useRef();

  // Arrow Functions
  const handleClick = (e) => {
    console.log(e.target.innerText);
    setCount((prev) => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // using localstorage
  const saveSomeData = () => {
    localStorage.setItem("key", "value");
  };

  const apiRequest = async (url, options) => {
    let errMsg = null;
    try {
      const result = await fetch(url, options);
      if (!result.ok) throw Error("Some error occured!");
    } catch (error) {
      errMsg = error;
    } finally {
      return errMsg;
    }
  };

  const handleNewName = () => {
    console.log("asdfs");
    const newName = {
      id: 3,
      name: "Vishwas",
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "applicatoin/json",
      },
      body: JSON.stringify(newName),
    };
    const err = apiRequest(API_URL, options);
    if (err) console.log(err);
  };

  // useEffect Hook
  useEffect(() => {
    setCount(5);
  }, []);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const result = await fetch(API_URL);
        const data = await result.json();
        setNames(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNames();
  }, []);

  return (
    <>
      {/* This is a comment */}

      {/* We can javascript code inside html -> jsx */}
      {"Hritik"}

      {/* JS boolean values are not shown! */}
      {2 === 4}

      {/* Array are converted to string */}
      {[1, "hello"]}

      {/* HTML vs JSX changes (className and htmlFor) */}
      <h1 id="header" className="header">
        This is heading
      </h1>
      <label htmlFor="name">Name</label>

      {/* Styling an HTML tag directly */}
      <h2 style={{color: "blue"}}>Heading 2</h2>

      {/* Rendering a component */}
      <Header />

      {/* Passing props to a component */}
      <Greeting message="Greet Component" />

      {/* Click Events */}
      <button onClick={handleClick}>Click Me</button>
      <span> {count}</span>

      {/* Printing Lists */}
      <ul>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Adding icons */}
      <FaTrashAlt role="button" />

      {/* Forms in React */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          ref={inputRef}
          type="text"
          name="name"
          id="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Color Box */}
      <div className="colorBox" style={{backgroundColor: color}}>
        <p className="colorName">
          {color.length === 0 ? "Empty Value" : color}
        </p>
      </div>
      <input
        autoFocus
        type="text"
        name="color"
        id="color"
        placeholder="Type Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      {/* People List */}
      <ol>
        {names.map((item) => (
          <li>{item.name}</li>
        ))}
      </ol>
      <button onClick={()=>console.log('jgh')}>Add new Name</button>
    </>
  );
}
