import NavBar from 'Components/NavBar/NavBar';
import TypeMeal from 'Components/TypeMeal/TypeMeal';
import { useEffect, useState } from 'react';
import './PrincipalPage.css';

export default function PrincipalPage() {
  
  return (
    <>
    <p>Auto update</p>
      <NavBar />
     <TypeMeal />
      
    </>
  );
}
