// need to work more on CSS at the least fix the navigation bar
// add click restaurant message for update info.
import { Route, Link, Switch } from 'react-router-dom';// if have time add authentication 
import About from './components/About/About';
import CommentsForm from './components/Contact/CommentsForm';
import RestaurantInfo from './components/Home/RestaurantInfo';
import RestaurantForm from './components/AddRestaurant/RestaurantForm';
import UpdateRestaurant from './components/UpdateRestaurant/UpdateRestaurant';
import Reglogin from './components/Login/Reglogin';


import './App.css';

function App() {
 

  return (
    <div className="body">
      <div className="container-fluid text-center">
      <header className="Logo">
          <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
        <Link className="navbar-brand" to='/'><h1 className="homeH1">REMEMBER EATS</h1></Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <h3 className="homeH2">Site Menu</h3>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" aria-current="page" to='/addrestaurant'><h3>Add Restaurant</h3> <br /> </Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to='/contact'><h3>GuestBook</h3> <br /> </Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to='/reglogin'><h3>Register/Log In</h3> <br /> </Link></li>
                </ul>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
      </header> 
      <hr/>
      <main>
          <Switch>
            <Route exact path='/' component={RestaurantInfo} />
            <Route path='/about' component={About} />
            <Route path='/addrestaurant' component={RestaurantForm} />
            <Route path='/contact' component={CommentsForm} />
            <Route path='/reglogin' component={Reglogin} />
            <Route path='/UpdateRestaurant/:id' component={UpdateRestaurant}/>
          </Switch>
        </main>

        <hr/>
        <footer><h4>Our Phone: 555-5555     |       Our Email: haveit@yourway.com</h4></footer>
      </div>
    </div>
  );
}

export default App; 
