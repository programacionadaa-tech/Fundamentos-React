import './App.css'
import { BasicTypes } from './typescript/BasicTypes'
import { ObjectLiterals } from './typescript'
import { BasicFunctions } from './typescript/BasicFunctions'
import { Counter, CounterWithHook, UserPage } from './components'
import { LoginPage } from './components/LoginPage'
import {FormsPage} from './components/FormsPage';

function App() {

  return (
    <main>
      <h1>Introduccion a TS - React</h1>
      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFunctions /> */}
      {/* <Counter /> */}
      {/* <CounterWithHook /> */}
      {/* <LoginPage /> */}
      {/*<UserPage />*/}
      <FormsPage/>
    </main>
  )
}

export default App
