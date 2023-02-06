import './CardMeat.css'

export default function CardMeat(props : any) {
  return (
    <div className="divMeal" id={props.id}>
          <img onClick={props.click} className="imageMeal" src={props.img} title={props.title} alt="" />
          <div className='line'></div>
          <p>{props.name}</p>
    </div>
  )
}
