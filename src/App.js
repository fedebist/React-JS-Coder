import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount'



function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer/>
    </>
  );
}

export default App;
