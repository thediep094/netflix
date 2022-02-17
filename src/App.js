import './App.scss';
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import { Route, Routes } from 'react-router-dom';
import TvShows from './pages/tvshow/TvShows';
import Movies from './pages/movies/Movies';
import History from './pages/history/History';

function App() {
  return (
    <div className="App">
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
    </div>
  );
}

export default App;
