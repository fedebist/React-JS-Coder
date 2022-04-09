import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';
import Products from '../src/data/Products';



function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer/>
    </>
  );
}

export default App;
