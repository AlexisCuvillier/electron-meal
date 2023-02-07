import './CardMeat.css'

export default function CardMeat(props : any) {
  return (
    <div onClick={props.click} title={props.title} className="divMeal" id={props.id}>
          <img  className="imageMeal" src={props.img}  alt="" />
          <div className='line'></div>
          <p>{props.name}</p>
    </div>
  )
}
