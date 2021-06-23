import { useContext } from 'react'
import CounterContext from '../ContextAPI/CounterContext';

function Child() {

  let counterValue = useContext(CounterContext);
  return (
    <div>
      <h1>this is child</h1>
      <h4>Counter value is : {counterValue[0]}</h4>
      <button onClick={() => { counterValue[1](++counterValue[0]) }}>click to add</button>
    </div>
  )
}

export default Child