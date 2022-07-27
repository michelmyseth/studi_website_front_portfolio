import "./App.css";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Galerie from "./component/galerie/Galerie";
import Tarifs from "./component/tarifs/Tarifs";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/galerie" element={<Galerie />} />
                <Route path="/tarifs_et_prestations" element={<Tarifs />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
