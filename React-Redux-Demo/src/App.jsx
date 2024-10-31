import {Provider} from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import store from './components/Redux/store.js'
import HooksCakeContainer from './components/HooksCakeContainer.jsx'
import IceCreamContainer from './components/IceCreamContainer.jsx'
import ChocolateContainer from './components/ChocolateContainer.jsx'

function App() {
  

  return (
    <>
    <Provider  store={store}>
     <HooksCakeContainer/>
     <CakeContainer/>
     <IceCreamContainer/>
     <ChocolateContainer/>
     </Provider>
    </>
  )
}

export default App
