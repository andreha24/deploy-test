import {useState, useEffect} from "react";
import axios from "axios";
import './App.css';

function App() {

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios.get("https://test-api-s0ep.onrender.com/api")
      .then(function (response) {
        setAllUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  return (
    <div className="App">
      {allUsers.map(({id, name}) => (
        <div key={id}>
          <h1>{id}</h1>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
