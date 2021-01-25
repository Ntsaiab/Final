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
    <div className="App">
    <header className="App-header">
     
      <nav>
          
          <Link  to='/'><h1 id="appName">RESTAURANT APP</h1> <br /> <br /> </Link>
        
          <Link to='/about'><h3>AboutUs</h3> <br /> </Link>
          <Link to='/addrestaurant'><h3>Add Restaurant</h3> <br /> </Link>
          <Link to='/contact'><h3>GuestBook</h3> <br /> </Link>
          <Link to='/reglogin'><h3>Register/Log In</h3> <br /> </Link>
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
