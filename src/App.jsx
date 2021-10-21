import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './screens/Home';
function App() {
  return (
    <>
    <BrowserRouter>
    <nav className="main-menu">
        <div>
          <a className="logo" href="http://startific.com">
          </a>
        </div>
        <div className="settings"></div>
        <div className="scrollbar" id="style-1" />
      
        <ul className="logout">
          <li>
          <Link to="/home">
              <i className="fa fa-home"></i>
              <span className="nav-text">Home</span>
          </Link>
          </li>
          <li>
          <Link to="/about">
          <i className="fa fa-info-circle"></i>
              <span className="nav-text">About</span>
          </Link>
          </li>
          <li>
          <Link to="/contact">
              <i className="fa fa-envelope"></i>
              <span className="nav-text">Contact</span>
          </Link>
          </li>
          <li>
          <Link to="/services">
              <i className="fa fa-briefcase"></i>
              <span className="nav-text">Services</span>
          </Link>
          </li>
          
        </ul>
      </nav>



      <Switch>
                <Route exact path="/home">
                   <Home author="Gabriel Rodrigues Perez" />
                </Route>
                {/* <Route path="/about">

                </Route>
                <Route path="/contact">
                   
                </Route> */}
        </Switch>
    </BrowserRouter>


   
    </>
  );
}

export default App;