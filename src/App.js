import "./App.css";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import { Routes, Route } from "react-router-dom";
import Galery from "./component/galery/Galery";
import Tarifs from "./component/tarifs/Tarifs";
import ContactForm from "./component/form/ContactForm";
import Navbar2 from "./component/navbar/Navbar";
import ErrorPage from "./component/errorPage/ErrorPage";
function App() {
    return (
        <>
            <Navbar2 />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/galerie" element={<Galery />} />
                <Route path="/tarifs_et_prestations" element={<Tarifs />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
