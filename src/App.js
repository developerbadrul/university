import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Home from './components/Home/Home';
import Aboutus from './components/AboutUs/Aboutus';
import Services from './components/Services/Services';
import NotFound from './components/404/NotFound';
import Posts from './components/Posts/Posts';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/aboutus">
            <Aboutus></Aboutus>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/posts">
            <Posts></Posts>
          </Route>
          <Route path="/">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
