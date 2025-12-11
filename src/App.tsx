import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import Chapter11Page from './pages/Chapter11Page';
import Chapter13Page from './pages/Chapter13Page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chapter11" element={<Chapter11Page />} />
        <Route path="/chapter13" element={<Chapter13Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


