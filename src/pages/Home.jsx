import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                 <Route path='/item/:idItem' element={<ItemDetailContainer />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default Home;
