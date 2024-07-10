import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favourites from './components/Favourites';
import MovieDetail from './components/MovieDetail';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/favourites" element={<Favourites/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  )
}

export default App
