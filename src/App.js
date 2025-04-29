import logo from './logo.svg';
import WelcomePage from "./components/WelcomePage";
import DiscoverPage from "./components/DiscoverPage";

import { Routes, Route } from 'react-router-dom';  // Import des composants nécessaires pour le routage

import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />  {/* Page d'accueil */}
        <Route path="/tasks" element={<DiscoverPage />} />  {/* Page de découverte */}
      </Routes>
    </div>
  );
}
export default App;
