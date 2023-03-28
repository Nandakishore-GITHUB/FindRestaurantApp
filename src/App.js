import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Reastaurentlist from './components/Reastaurentlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewRest from './components/ViewRest';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          {/* path setting for reataurant list */}
          <Route path='/' element={<Reastaurentlist />}/>
          {/* path setting for ViewRest */}
          <Route path='/view-restaurant/:id' element={<ViewRest />}/>
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
