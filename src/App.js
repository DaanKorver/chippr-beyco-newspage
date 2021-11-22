import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article/:id" element={<Article/>}/>
      </Routes>
    </Router>
  );
}

export default App;
