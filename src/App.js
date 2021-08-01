import './app.scss'
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  return (
  
    <Router >
       <Switch>
   <Route path="/" exact>
      <Register/>
     
    
            
          </Route>
          <Route path="/login">
             <Login/>
          </Route>
          <Route path="/home">
             <Home />
          </Route>
          <Route path="/full-length"  >
            <Watch />
          </Route>
          </Switch>
  </Router>
  
  
  )

   
 
}

export default App;
