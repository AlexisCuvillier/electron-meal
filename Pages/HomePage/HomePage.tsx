import { useNavigate } from 'react-router-dom';
import './HomePage.css';
export default function HomePage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/recette');
  }
  return (
    <>
      <div className="Appi">
        <div className="welcome">
          <h1>
            Bonjour et bienvenue sur electron-meal <br /> une application de
            recette
          </h1>
          <button onClick={handleClick} className="home">
            Venez découvrir des centaines de recettes
          </button>
        </div>
      </div>
    </>
  );
}
