import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    {/* <ItemListContainer/> */}
    <ItemDetailContainer />
    </>
  );
}

export default App;
