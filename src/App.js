import './App.css';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/Detail' component={DetailPage}/>
        
        
      </Switch>
    </Router>
  );
}

export default App;
