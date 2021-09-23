import './App.css';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail'
import MenuPage from './pages/Menu'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/Menu' component={MenuPage}/>
        
        <Route path='/Detail' component={DetailPage}/>
        
        
      </Switch>
    </Router>
  );
}

export default App;
