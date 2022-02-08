import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Article}>          
        </Route>            
      </Switch>    
    </Router>
  );
}

export default App;
