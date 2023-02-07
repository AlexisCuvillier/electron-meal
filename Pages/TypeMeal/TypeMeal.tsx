import './TypeMeal.css';
import { useState, useEffect } from 'react';
import CardMeat from 'Components/CardMeat/CardMeat';
import CardDescription from '../../src/Components/CardDescription/CardDescription';
import NavBar from 'Components/NavBar/NavBar';

export default function TypeMeal() {
  const [platPays, setPlatPays]: any = useState([]);
  const [idMeal, setIdMeal]: any = useState([]);
  const [meal, setMeal]: any = useState([]);


  const [searchMeal, setSearchMeal] = useState('');
  const [searchState, setSearchState]: any = useState([]);


  useEffect(() => {
    fetchPays();
    fetchMealCountry();
    fetchSearchMeal();
  }, [idMeal,searchMeal]);

  const search = (e : any) => {
    e.preventDefault();
    setSearchMeal(e.currentTarget.value)
  }

  const fetchSearchMeal = async () => {
    const res = await fetch (
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    )
    const searchRes = await res.json();
    setSearchState(searchRes)

  }
  console.log('searchMeal',searchMeal);
  console.log('searchState',searchState);
  

  const TriggerId = (e: any) => {
    e.preventDefault();
    setIdMeal(e.currentTarget.title);
  };

  const fetchMealCountry = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const mealDescript = await res.json();
    setMeal(mealDescript.meals);
  };

  const fetchPays = async () => {
    const res = await fetch(
      ' https://www.themealdb.com/api/json/v1/1/filter.php?a=French'
    );
    const allPlatPays = await res.json();
    setPlatPays(allPlatPays.meals);
  };
  console.log('plat', platPays);
  console.log('meal', meal);

  return (
    <>
    <NavBar searchMeal={search} />
      <div className="typeCard">
        {idMeal == '' ? (
          platPays.map((item: any) => {
            return (
              <CardMeat
                key={item.idMeal}
                title={item.idMeal}
                click={TriggerId}
                id={item.idMeal}
                name={item.strMeal}
                img={item.strMealThumb}
              />
            );
          })
        ) : meal == null 
        
        ?  ''
        : (
          <CardDescription
            img={meal[0].strMealThumb}
            name={meal[0].strMeal}
            country={meal[0].strArea}
            ingredient1={meal[0].strIngredient1}
            ingredient2={meal[0].strIngredient2}
            ingredient3={meal[0].strIngredient3}
            ingredient4={meal[0].strIngredient4}
            ingredient5={meal[0].strIngredient5}
            ingredient6={meal[0].strIngredient6}
            ingredient7={meal[0].strIngredient7}
            ingredient8={meal[0].strIngredient8}
            ingredient9={meal[0].strIngredient9}
            ingredient10={meal[0].strIngredient10}
            ingredient11={meal[0].strIngredient11}
            ingredient12={meal[0].strIngredient12}
            ingredient13={meal[0].strIngredient13}
            ingredient14={meal[0].strIngredient14}
            ingredient15={meal[0].strIngredient15}
            ingredient16={meal[0].strIngredient16}
            ingredient17={meal[0].strIngredient17}
            ingredient18={meal[0].strIngredient18}
            ingredient19={meal[0].strIngredient19}
            ingredient20={meal[0].strIngredient20}
            mesure1={meal[0].strMeasure1}
            mesure2={meal[0].strMeasure2}
            mesure3={meal[0].strMeasure3}
            mesure4={meal[0].strMeasure4}
            mesure5={meal[0].strMeasure5}
            mesure6={meal[0].strMeasure6}
            mesure7={meal[0].strMeasure7}
            mesure8={meal[0].strMeasure8}
            mesure9={meal[0].strMeasure9}
            mesure10={meal[0].strMeasure10}
            mesure11={meal[0].strMeasure11}
            mesure12={meal[0].strMeasure12}
            mesure13={meal[0].strMeasure13}
            mesure14={meal[0].strMeasure14}
            mesure15={meal[0].strMeasure15}
            mesure16={meal[0].strMeasure16}
            mesure17={meal[0].strMeasure17}
            mesure18={meal[0].strMeasure18}
            mesure19={meal[0].strMeasure19}
            mesure20={meal[0].strMeasure20}
            instruction={meal[0].strInstructions}
          />
        )}
      </div>
    </>
  );
}
