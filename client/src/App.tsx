import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CardPage from './pages/CardPage';
import AboutPage   from './pages/AboutPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cards" element={<CardPage />} />
    </Routes>
  );
}