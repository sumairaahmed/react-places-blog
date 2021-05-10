import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import './App.css';
import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';

function App() {
  return (
    <div className="App">
    
    <Router>
      <Switch>
      <Route path='/' exact>
        <Users />
      </Route>
      <Route path='/places/new' exact>
        <NewPlaces />
      </Route>
      
      <Redirect to='/' />
      </Switch>
      
    </Router>
    </div>
    
  );
}

export default App;
