import '../App.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import SearchForm from './SearchForm';

let Navbar = () => {
    return (
      <nav class='navPersonalizado'>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to='/'><a class="navbar-brand" href="#">Phone Store MDP</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to='/'><a class="nav-link" href="#">Home <span class="sr-only"></span></a></Link>
      </li>
      <li class="nav-item">
        <Link to='/category/iphone'><a class="nav-link" href="#">iPhone</a></Link>
      </li>
      <li class="nav-item">
      <Link to='/category/samsung'><a class="nav-link" href="#">Samsung</a></Link>
      </li>
      <li class="nav-item">
      <Link to='/category/xiaomi'><a class="nav-link" href="#">Xiaomi</a></Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Nosotros</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#"> <SearchForm /></a>
      </li>
      <li class="nav-item">
        <Link to='/Cart'><CartWidget></CartWidget></Link>
      </li>
    </ul>
  </div>
</nav>
    </nav>


      
);
}


export default Navbar;
