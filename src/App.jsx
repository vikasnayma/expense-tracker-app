
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Expensetracker from './Components/Expensetracker.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Signin from './Components/Signin.jsx'
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}> </Route>
        <Route path='/Expensetracker' element={<Expensetracker/>}> </Route>
      </Routes>
    </Router>
    {/* <Dashboard/> */}
    </>
  )
}

export default App
