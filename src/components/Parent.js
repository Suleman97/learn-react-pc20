import Child from "./Child"
import ChildReducer from "./Child-reducer"

function Parent() {
  return (
    <div>
      <Child />
      <ChildReducer />
    </div>
  )
}

export default Parent