import './Category.css';
import { useState, useEffect } from 'react';
import NavBar from '../../src/Components/NavBar/NavBar';
import CardMeat from 'Components/CardMeat/CardMeat';
export default function Category() {
  const [category, setCategory] = useState([]);
  const [nameCategory, setNameCategory]: any = useState([]);
  const [fetchCate, setFetchCate] = useState([]);

  const fetchCategory = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const allCategory = await res.json();
    setCategory(allCategory.categories);
  };

  const triggerId = (e: any) => {
    e.preventDefault();
    setNameCategory(e.currentTarget.title);
  };

  const fetchMealCategory = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameCategory}`
    );
    const triggerCategory = await res.json();
    setFetchCate(triggerCategory.meals);
  };

  const back = async (e: any) => {
    e.preventDefault();
    setNameCategory('');
  };

  useEffect(() => {
    fetchCategory();
    fetchMealCategory();
  }, [nameCategory]);

  console.log('idCat', nameCategory);

  console.log('category', category);

  console.log('fetchCate', fetchCate);

  return (
    <>
      <NavBar />
      <div className="categoryDiv">
      {nameCategory == '' ? '' : <button onClick={back}>Back</button>}
        {nameCategory == ''
          ? category.map((item: any) => {
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
          : fetchCate == null
          ? ''
          : fetchCate.map((item: any) => {
              return (
                <CardMeat
                  key={item.idMeal}
                  id={item.idMeal}
                  img={item.strMealThumb}
                  name={item.strMeal}
                />
              );
            })}
      </div>
    </>
  );
}
