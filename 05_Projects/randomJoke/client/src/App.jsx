import {useState} from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [joke, setJoke] = useState(null);

  const handleOnClick = async () => {
    const options = {
      method: "GET",
      url: "https://dad-jokes.p.rapidapi.com/random/joke",
      headers: {
        "X-RapidAPI-Key": "ebb18ceef2msh87457dbeb07354dp1b8f07jsn9ef58e55915c",
        "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setJoke(response.data.body[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <div className="inputContainer">
        <span className="inputText">
          Click Button to Generate a Random Joke
        </span>
        <span className="inputAnswer">
          {joke ? (
            <>
              <div className="setup">{joke.setup}</div>
              <div className="punchline">{joke.punchline}</div>
            </>
          ) : null}
        </span>
        <button onClick={handleOnClick} className="inputButton">
          Click Me
        </button>
      </div>
    </div>
  );
}
