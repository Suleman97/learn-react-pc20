import { Suspense, useEffect, useState } from 'react';
import './App.css';
import Dinner from './components/Dinner';
// import Child from './components/Child';
import Parent from './components/Parent';
import CounterContext from './ContextAPI/CounterContext';

function App() {
  const [count, setCount] = useState(0);
  const countState = useState(25);
  const [day, setDay] = useState(true);
  const [repos, setRepos] = useState([{}]);

  useEffect(() => {
    async function fetchData() {

      const api = await fetch(`https://api.github.com/users/Suleman97/repos`);
      const data = await api.json();
      // console.log(data);
      setRepos(data);
    }
    fetchData();
  }, []);

  console.log(repos);
  return (
    <div className="App">
      <Dinner dish="Chicken Biryani" />
      <button onClick={() => setCount(count + 1)}>Click to add</button>
      <h3>{count}</h3>
      <button onClick={() => setDay(!day)}>click to change time</button>
      <h2>Time in'morning or night': {day ? 'Morning' : 'night'}</h2>
      <CounterContext.Provider value={countState}>
        <Parent />
      </CounterContext.Provider>

      <ul>
        <Suspense fallback={<h1>Loading...</h1>}>
          {repos.map((Obj, index) => (
            <li key={index}>{Obj.name}</li>
          ))}
        </Suspense>
      </ul>

    </div>
  );
}

// https://learn_react_boot2020.surge.sh/

export default App;
