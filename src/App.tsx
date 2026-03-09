import './App.css'
import { BasicTypes } from './typescript/BasicTypes'
import { ObjectLiterals } from './typescript'
import { BasicFunctions } from './typescript/BasicFunctions'
import { Counter, CounterWithHook } from './components'

function App() {

  return (
    <main>
      <h1>Introduccion a TS - React</h1>
      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFunctions /> */}
      {/* <Counter /> */}
      <CounterWithHook /> 
    </main>
  )
}

export default App
