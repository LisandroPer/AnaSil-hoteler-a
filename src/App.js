import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SobreAnaSil from './components/SobreAnaSil';
import ItemCarouselContainer from './components/ItemCarouselContainer';

function App() {
  return (
    <>
       
      <h1>AnaSil</h1>
      <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/AnaSil" element={<SobreAnaSil />} />
              <Route path="/duplex/:idDuplex" element={<ItemCarouselContainer />} /> 
            </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
