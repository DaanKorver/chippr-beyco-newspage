import '@/styles/App.css';
import Navbar from '@/components/Navbar'
import Home from '@/pages/Home';
import Article from '@/pages/Article';
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
