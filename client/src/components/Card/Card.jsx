import './Card.css'
import { Link } from 'react-router-dom';
import imageDefault from '../../images/istockphoto-1223195737-612x612.jpg'

function Card({id, name, image, temperament = [], weight}) {

    if(!image) image = imageDefault;
    if(!temperament.length) temperament = 'Sin especificar';

    return(
        <div className='card'>
            <img className='imagecard' src={image} alt={name}/>
            <Link className='name' to={`dog/${id}`}><h1>{name}</h1></Link>
            <p>
                Peso: <span> {weight} Kg</span>
            </p>          
            <p>
                Temperamento(s): <span> {temperament}</span>
            </p>
        </div>
    )
}

export default Card;