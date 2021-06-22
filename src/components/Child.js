import { useContext } from 'react'
import CounterContext from '../ContextAPI/CounterContext';

function Child() {

  let counterValue = useContext(CounterContext);
  return (
    <div>
      <h1>this is child</h1>
      <h4>Counter value is : {counterValue}</h4>
    </div>
  )
}

export default Child