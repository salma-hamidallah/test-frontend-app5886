import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../axios/taskAxios'; 
import '../App.css';

function DiscoverPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await fetchTasks();
        setData(tasks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTasks();
  }, []);

  const handleEdit = (id) => {
    alert(`Modifier l'élément avec l'ID : ${id}`);
  };

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  if (loading) return <p>Chargement des tâches...</p>;
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>;

  return (
    <div className="container">
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

      <main className="main-content">
        <h2>Tableau des tâches</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>DueDate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.dueDate}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)} className="btn-edit">Modifier</button>
                  <button onClick={() => handleDelete(item.id)} className="btn-delete">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="footer">
        &copy; 2025 Mon Projet. Tous droits réservés.
      </footer>
    </div>
  );
}

export default DiscoverPage;
