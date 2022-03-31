import '../App.css';
import CartWidget from './CartWidget';

let Navbar = () => {
    return (
      <nav class='navPersonalizado'>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Phone Store MDP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Catálogo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Nosotros</a>
      </li>
      <li class="nav-item">
        <CartWidget></CartWidget>
      </li>
    </ul>
  </div>
</nav>
    </nav>


      
);
}

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

export default Navbar;
