import Kart from '../img/kart.png'
export default function Books(props) {
    
  return (
      <div className="book-container">
          <img src={props.img}/>
          <h4>{props.name}</h4>
          <div className="book-info">
              <img src={Kart} width='20px' height='20px'  />
              <div className='book-price'> 
              <p>$</p>
              <p>{props.price}</p>
              </div>
          </div>
          
      </div>
  )
}