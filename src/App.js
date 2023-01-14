import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/* Styles */
import styles from './css/app.module.css'

/* Componentes */
import { Header } from "./components/header";
import { LandingPage } from './pages/landingPage';
import { Footer } from "./components/footer";

function App() {
  return (
    <Router>
      <Header />

      <main>

        <Routes>

          <Route path='/' element={<LandingPage />} />

          <Route path='*' element={<Navigate replace to='/' />} />
          
        </Routes>

      </main>

      <Footer />
      
    </Router>
  );
}

export default App;
