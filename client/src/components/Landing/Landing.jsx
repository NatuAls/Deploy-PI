import './Landing.css';
import { Link } from 'react-router-dom';
import image from '../../images/dog.png'

function Landing() {
  return (
    <div className='image'>
      <div className='contlanding'>
        <div className='divland'>
          <img className='imagelogolanding' src={image} alt='dogs logo'/>
          <span className='henrylanding'> Henry Dogs </span>
        </div>
        <Link to={'/home'}>
          <button className='enterbutton'>ENTRAR</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;