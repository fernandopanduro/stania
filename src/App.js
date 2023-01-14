import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/* Styles */
import styles from './css/app.module.css'

/* Componentes */
import { Header } from "./components/header";
import { LandingPage } from './pages/landingPage';

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
      
    </Router>
  );
}

export default App;
