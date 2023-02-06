import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Category from '../../Pages/Category/Category';

import HomePage from '../../Pages/HomePage/HomePage';
import PrincipalPage from '../../Pages/PrincipalPage/PrincipalPage';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recette" element={<PrincipalPage />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
}
