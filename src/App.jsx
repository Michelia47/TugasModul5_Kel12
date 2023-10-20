import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonProvider } from './components/Pokemon';
import Halaman1 from './components/halaman1';
import Halaman2 from './components/halaman2';

function App() {
  return (
  <Router>
      <PokemonProvider offset={0}>
        <Routes>
            <Route path="/" element={<Halaman1 />} />
        </Routes>
      </PokemonProvider>
      <PokemonProvider offset={10}>
        <Routes>
          <Route path="/halaman2" element={<Halaman2 />} />
        </Routes>
      </PokemonProvider>
    </Router>
  );
}
export default App;