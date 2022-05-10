import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartContext} from '../components/CartContext';
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";
import Cart from '../components/Cart';
import CartContextProvider from "../components/CartContext";

const Home = () => {
    return (
        <CartContextProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} /> {/* categorías (iphone, samsung). El nombre lo decide uno 'category' */}
                 <Route path='/item/:productId' element={<ItemDetailContainer />} /> {/* número de producto */}
                 <Route path='/Cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
        </CartContextProvider>
    );
}

export default Home;
