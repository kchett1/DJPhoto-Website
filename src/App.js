import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import ProtectedGallery from './components/ProtectedGallery';
import './App.css';

const galleries = [
  { name: 'Switzerland', path: 'switzerland', folder: 'Switzerland' },
  { name: 'China', path: 'china', folder: 'China' },
  { name: 'Washington D.C.', path: 'washington-dc', folder: 'Washington D.C' },
  { name: 'England', path: 'england', folder: 'London' },
  { name: 'San Diego', path: 'san-diego', folder: 'San Diego AACR' },
  { name: 'Ivrea', path: 'ivrea', folder: 'Ivrea' },
  { name: 'Toronto', path: 'toronto', folder: 'Toronto' },
  { name: 'July 4th', path: 'july-4th', folder: 'Jul 4th' }
];

const privateGalleries = [
  { name: "Kieran's Graduation", path: 'kierans-graduation', folder: 'Stoga Graduation' },
  { name: "Rowan's 16th", path: 'rowans-16th', folder: 'Ro 16' }
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar galleries={galleries} privateGalleries={privateGalleries} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {galleries.map(gallery => (
            <Route 
              key={gallery.path} 
              path={`/gallery/${gallery.path}`} 
              element={<Gallery title={gallery.name} folder={gallery.folder} />} 
            />
          ))}
          {privateGalleries.map(gallery => (
            <Route 
              key={gallery.path} 
              path={`/private/${gallery.path}`} 
              element={<ProtectedGallery title={gallery.name} folder={gallery.folder} />} 
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
