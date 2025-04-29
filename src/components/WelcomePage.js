import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 
function WelcomePage() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>DevOps Project</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="main-content">
        <h2>Bienvenue sur notre plateforme</h2>
        <p>Une solution complète pour répondre à vos besoins professionnels.</p>
        <Link to="/tasks" className="cta-button">Découvrir</Link>
              </main>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 DevOps Project. Tous droits réservés.
      </footer>
    </div>
  );
}

export default WelcomePage;
