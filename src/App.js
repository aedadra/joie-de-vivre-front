import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Contact from './pages/Contact';
import Avis from './pages/Avis';
import Home from './pages/Home';
import Prestations from './pages/Prestations';
import Projets from './pages/Projets';
import Login from './pages/Connexion';
import Propos from './pages/Propos';
import SignUp from './pages/Creation';
import Inspirations from './pages/Inspirations';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Propos" element={<Propos />} />
          <Route path="/Prestations" element= {<Prestations />} />
          <Route path="/Projets" element={<Projets/>} />
          <Route path='/Inspirations' element={<Inspirations />} />
          <Route path="/Avis" element={<Avis />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Connexion" element={<Login />} />
          <Route path="/Creation" element={<SignUp />} />
        </Routes>
    </>
  );
}

export default App;
