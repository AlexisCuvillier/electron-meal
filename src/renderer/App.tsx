import HomePage from '../../Pages/HomePage/HomePage';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Category from '../../Pages/Category/Category';
import TypeMeal from '../../Pages/TypeMeal/TypeMeal';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recette" element={<TypeMeal />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
}
