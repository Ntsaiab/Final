// need to work more on CSS at the least fix the navigation bar
// add click restaurant message for update info.
import { Route, Link, Switch } from 'react-router-dom';// if have time add authentication 
import About from './components/About/About';
import CommentsForm from './components/Contact/CommentsForm';
import RestaurantInfo from './components/Home/RestaurantInfo';
import RestaurantForm from './components/AddRestaurant/RestaurantForm';
import UpdateRestaurant from './components/UpdateRestaurant/UpdateRestaurant';
import Reglogin from './components/Login/Reglogin';


// import './App.css';

function App() {
 

  return (
    <div className="container">
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <Link class="navbar-brand" to='/'><h1 id="appName">RESTAURANT APP</h1></Link>
      <hr></hr>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

          <hr></hr>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Site Menu
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" aria-current="page" to='/addrestaurant'><h3>Add Restaurant</h3> <br /> </Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link class="dropdown-item" to='/contact'><h3>GuestBook</h3> <br /> </Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link class="dropdown-item" to='/reglogin'><h3>Register/Log In</h3> <br /> </Link></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
     </header> 
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
      <footer><h4>Our Phone: 555-5555     |       Our Email: haveit@yourway.com</h4></footer>
    </div>
  );
}

export default App; 
