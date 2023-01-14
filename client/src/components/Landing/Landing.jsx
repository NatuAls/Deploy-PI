import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className='image'>
      <div className='contlanding'>
        <span>Proyencto individual - Dogs</span>
        <span>Alesso Nahuel</span>
        <Link to={'/home'}>
          <button className='enterbutton'>ENTRAR</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;