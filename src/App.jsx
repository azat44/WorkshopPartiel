import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Produits from "./pages/Produits";
import Univers from "./pages/Univers";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/produits" element={<Produits/>}></Route>
        <Route path="/notre-univers" element={<Univers/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
