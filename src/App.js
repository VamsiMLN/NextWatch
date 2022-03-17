import {Route} from 'react-router-dom'
import Login from './components/Login'

import './App.css'

// Replace your code here
const App = () => (
  <>
    <Route exact path="/login" component={Login} />
  </>
)

export default App
