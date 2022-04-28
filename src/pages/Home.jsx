import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";
import Cart from '../components/Cart';

const Home = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} /> {/* categorías (iphone, samsung). El nombre lo decide uno 'category' */}
                 <Route path='/item/:productId' element={<ItemDetailContainer />} /> {/* número de producto */}
                 <Route path='/Cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Home;
