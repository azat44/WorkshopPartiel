import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Produit from "./pages/Produit";
import Univers from "./pages/Univers";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
import Favs from "./pages/Favs";

function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/produits" element={<ProductPage/>}></Route>
          <Route path="/notre-univers" element={<Univers/>}></Route>
          <Route path="/produit" element={<Produit/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/fav" element={<Favs/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
