import './NavBar.css';
import logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

  const navigate = useNavigate()
  function handleClick() {
    navigate('/category')
  } 

  function returnHome() {
    navigate('/')
  }

  return (
    <>
      <div className="navBarBase">
        <div className="Base1">
          <img onClick={returnHome} className="logo" src={logo} alt="" />
        </div>
        <div className="Base2">
          <input type="text" placeholder="Search meal" />
          <button onClick={handleClick}  >Category</button>
        </div>
      </div>
    </>
  );
}
