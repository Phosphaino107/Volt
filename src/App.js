// In App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './comps/Home';
import Cars from './comps/Cars';
import Contact from './comps/Contact';
import Header from './comps/Header';
import Footer from './comps/Footer';



function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}
export default App;

