import './Category.css';
import { useState, useEffect } from 'react';
import NavBar from 'Components/NavBar/NavBar';
import CardMeat from 'Components/CardMeat/CardMeat';
import arrow from '../../assets/back-arrow.svg'
import CardDescription from '../../src/Components/CardDescription/CardDescription';
export default function Category() {
  const [category, setCategory] = useState([]);
  const [idMeal, setIdMeal]: any = useState([]);
  const [fetchCate, setFetchCate] = useState([]);
  const [meal, setMeal]: any = useState([]);

  const fetchCategory = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const allCategory = await res.json();
    setCategory(allCategory.categories);
  };


 const fetchMealCategory = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${idMeal}`
    );
    const triggerCategory = await res.json();
    setFetchCate(triggerCategory.meals);
  };

 const fetchMeal = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const mealDescript = await res.json();
    setMeal(mealDescript.meals);
  };

  const triggerId = (e: any) => {
    e.preventDefault();
    setIdMeal(e.currentTarget.title);
  };

  const back = async (e: any) => {
    e.preventDefault();
    setIdMeal('');
  };

  useEffect(() => {
    fetchCategory();
    fetchMealCategory();
    fetchMeal();
  }, [idMeal]);

  console.log('meal', meal);


  return (
    <>
      <NavBar />
      {idMeal == '' ? '' : <button onClick={back}><img src={arrow} alt="" /></button>}
      <div className="categoryDiv">
        {
        idMeal == '' ? category.map((item: any) => {
              return (
                <div className="divCard">
                  <p>{item.strCategory} </p>
                  <img
                    key={item.idCategory}
                    onClick={triggerId}
                    src={item.strCategoryThumb}
                    id={item.idCategory}
                    title={item.strCategory}
                    alt=""
                  />
                </div>
              );
            })
          : fetchCate !== null ?  fetchCate.map((item: any) => {
            return (
              <CardMeat
                key={item.idMeal}
                id={item.idMeal}
                img={item.strMealThumb}
                name={item.strMeal}
                title={item.idMeal}
                click={triggerId}
              />
            );
          }) 
          : meal == null ? '' :   <CardDescription
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
      
 } 
        
            
      </div>
    </>
  );
}
