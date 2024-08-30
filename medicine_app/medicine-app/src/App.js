import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NameSearch from './components/NameSearch';
import SymptomsCheck from './components/SymptomsCheck';
import SearchResults from './components/SearchResults';
import './App.css';

function Home() {
  return (
    <div className="App-main">
      <header className="App-header">
        <img src="your-logo-url.png" className="App-logo" alt="logo" />
      </header>
      <div className="button-container">
        <Link to="/NameSearch" className="App-button">Name Search</Link>
        <Link to="/SymptomsCheck" className="App-button">Symptoms Check</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NameSearch" element={<NameSearch />} />
        <Route path="/SymptomsCheck" element={<SymptomsCheck />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
