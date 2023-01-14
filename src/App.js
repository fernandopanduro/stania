import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/* Styles */
import styles from './css/app.module.css'

/* Componentes */
import { Header } from "./components/header";
import { LandingPage } from './pages/landingPage';
import { Footer } from "./components/footer";
import { Condiciones } from "./pages/condiciones";
import { Devoluciones } from "./pages/devoluciones";
import { Privacidad } from "./pages/privacidad";

function App() {
  return (
    <Router >
      <Header />

      <main className={styles.main}>

        <Routes>

          <Route path='/' element={<LandingPage />} />

          <Route path='/condiciones' element={<Condiciones />} />
          <Route path='/devoluciones' element={<Devoluciones />} />
          <Route path='/privacidad' element={<Privacidad />} />

          <Route path='*' element={<Navigate replace to='/' />} />
          
        </Routes>

      </main>

      <Footer />
      
    </Router>
  );
}

export default App;
