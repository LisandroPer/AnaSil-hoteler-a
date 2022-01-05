import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/footer';

function App() {
  return (
    <>
      <h1>AnaSil</h1>

      <NavBar />
      
      <ItemListContainer />

      <Footer />
    </>
  );
}

export default App;
