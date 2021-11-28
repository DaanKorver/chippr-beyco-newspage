import '@/styles/App.css';
import Navbar from '@/components/Navbar'
import Home from '@/pages/Home';
import Article from '@/pages/FullArticle';
import {Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion" 

function App() {
  const location = useLocation()
  return (
    <div>
    <Navbar />
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/article/:id" element={<Article/>}/>
      </Routes>
    </AnimatePresence>
    </div>
  );
}

export default App;
