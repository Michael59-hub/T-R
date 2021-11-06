import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PlacesToGo from './components/PlacesToGo';
import Experiences from './components/Experiences';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Processes from './components/Processes';
import PlacesToStay from './components/PlacesToStay.jsx';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={() => <HomePage />} />
          <Route path='/places' exact component={() => <PlacesToGo />} />
          <Route path='/experience' exact component={() => <Experiences />} />
          <Route path='/blog' exact component={() => <Blog />} />
          <Route path='/processes' exact component={()=> <Processes />} />
          <Route path='/placesToStay' exact component={()=> <PlacesToStay />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
