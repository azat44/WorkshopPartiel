import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Produits from "./pages/Produits";
import Produit from "./pages/Produit";
import Univers from "./pages/Univers";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/produits" element={<Produits/>}></Route>
        <Route path="/notre-univers" element={<Univers/>}></Route>
        <Route path="/produit" element={<Produit/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
