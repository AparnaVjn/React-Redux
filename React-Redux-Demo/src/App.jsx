import {Provider} from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import store from './components/Redux/store.js'
import HooksCakeContainer from './components/HooksCakeContainer.jsx'

function App() {
  

  return (
    <>
    <Provider  store={store}>
      <HooksCakeContainer/>
     <CakeContainer/>
     </Provider>
    </>
  )
}

export default App
