import CounterReducer from "./CounterReducer"
import { useReducer } from "react"

const ChildReducer = () => {
  const [state, dispatch] = useReducer(CounterReducer, 5)

  return (
    <div>
      <h3>Increment Reducer: {state}</h3>
      <button onClick={() => dispatch('INCREMENT')}>Click to add</button>
    </div>
  )
}

export default ChildReducer