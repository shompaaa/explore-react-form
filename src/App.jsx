import './App.css'
import ControlledField from './components/ControlledField/ControlledField'
import FormAction from './components/FormAction/FormAction'
import HookField from './components/HookField/HookField'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledField from './components/UnControlledField/UnControlledField'

function App() {

  return (
    <>
    <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlledField></UnControlledField> */}
      <HookField></HookField>
    </>
  )
}

export default App
