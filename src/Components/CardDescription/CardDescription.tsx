import './CardDescription.css';

export default function CardDescription(props: any) {
  return (
    <div>
      <div className='divTitleMeal'>
        <h3>{props.name}</h3>
        <h5>{props.country} meal</h5>
      </div>

      <div className='gridImgTable'>
        <div className='divImgMeal'>
          <img src={props.img} alt="" />
        </div>
        <div className="tableIngredient">
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Ingrédient :</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.ingredient1}</td>
                <td>{props.mesure1}</td>
              </tr>
              <tr>
                <td>{props.ingredient2}</td>
                <td>{props.mesure2}</td>
              </tr>
              <tr>
                <td>{props.ingredient3}</td>
                <td>{props.mesure3}</td>
              </tr>
              <tr>
                <td>{props.ingredient4}</td>
                <td>{props.mesure4}</td>
              </tr>
              <tr>
                <td>{props.ingredient5}</td>
                <td>{props.mesure5}</td>
              </tr>
              <tr>
                <td>{props.ingredient6}</td>
                <td>{props.mesure6}</td>
              </tr>
              <tr>
                <td>{props.ingredient7}</td>
                <td>{props.mesure7}</td>
              </tr>
              <tr>
                <td>{props.ingredient8}</td>
                <td>{props.mesure8}</td>
              </tr>
              <tr>
                <td>{props.ingredient9}</td>
                <td>{props.mesure9}</td>
              </tr>
              <tr>
                <td>{props.ingredient10}</td>
                <td>{props.mesure10}</td>
              </tr>
              <tr>
                <td>{props.ingredient11}</td>
                <td>{props.mesure11}</td>
              </tr>
              <tr>
                <td>{props.ingredient12}</td>
                <td>{props.mesure12}</td>
              </tr>
              <tr>
                <td>{props.ingredient13}</td>
                <td>{props.mesure13}</td>
              </tr>
              <tr>
                <td>{props.ingredient14}</td>
                <td>{props.mesure14}</td>
              </tr>
              <tr>
                <td>{props.ingredient15}</td>
                <td>{props.mesure15}</td>
              </tr>
              <tr>
                <td>{props.ingredient16}</td>
                <td>{props.mesure16}</td>
              </tr>
              <tr>
                <td>{props.ingredient17}</td>
                <td>{props.mesure17}</td>
              </tr>
              <tr>
                <td>{props.ingredient18}</td>
                <td>{props.mesure18}</td>
              </tr>
              <tr>
                <td>{props.ingredient19}</td>
                <td>{props.mesure19}</td>
              </tr>
              <tr>
                <td>{props.ingredient20}</td>
                <td>{props.mesure20}</td>
              </tr>
            </tbody>
          </table>
        </div>
      <div className='instruction'>
        <p>Instruction :</p>
        <p className='instructionP'>{props.instruction}</p>
      </div>
      </div>
    </div>
  );
}
