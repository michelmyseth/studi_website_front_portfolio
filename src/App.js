import './App.css';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import Galerie from './component/galerie/Galerie';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Galerie" element={<Galerie/>}/>
    </Routes>
    <Footer/>
    </>
   );
}

export default App;
