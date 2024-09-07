import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Prestations from './pages/Prestations';
import Propos from './pages/Propos';
import Inspirations from './pages/Inspirations';
import PrestationsPro from './pages/Presta-pro';
import PrestationId from './pages/PrestationId';
import Formulaire from './pages/Formulaire';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Propos" element={<Propos />} />
          <Route path="/Prestations" element= {<Prestations />} />
          <Route path="/PrestationsPro" element={<PrestationsPro />} />
          <Route path="/PrestationId/:id" element={<PrestationId />} />
          <Route path='/Inspirations' element={<Inspirations />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Formulaire" element={<Formulaire />} />
        </Routes>
    </>
  );
}

export default App;
