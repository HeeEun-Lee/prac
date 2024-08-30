import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NameSearch.css';

function NameSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search-results?query=${searchTerm}`);
  };

  return (
    <div className="name-search-container">
      <header className="name-search-header">
        <Link to="/" className="home-button">Home</Link>
      </header>
      <main className="name-search-main">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="button-group">
          <Link to="/Shortcut1" className="nav-button">
            <img src="image1-url.jpg" alt="Shortcut 1" className="button-image" />
            Shortcut 1
          </Link>
          <Link to="/Shortcut2" className="nav-button">
            <img src="image2-url.jpg" alt="Shortcut 2" className="button-image" />
            Shortcut 2
          </Link>
          <Link to="/Shortcut3" className="nav-button">
            <img src="image3-url.jpg" alt="Shortcut 3" className="button-image" />
            Shortcut 3
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NameSearch;
