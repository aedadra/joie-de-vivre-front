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

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Avis" element={<Avis />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Prestations" element= {<Prestations />} />
          <Route path="/Projets" element={<Projets/>} />
          <Route path="/Propos" element={<Propos />} />
          <Route path="/Connexion" element={<Login />} />
          <Route path="/Creation" element={<SignUp />} />
        </Routes>
    </>
  );
}

export default App;
