import React from 'react';
import './App.css';
import MovieList from "./Movies";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Nav from './Nav';
import Podcast from './Podcast';
import MovieList2 from "./movies/MovieList"


function App() {
  return (
    <BrowserRouter>
    {/* Using the Router to create a navigation ability */}
      <Nav/>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/podcast" element={<Podcast />}/>
          <Route path="/movies" element={<MovieList2 />}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

