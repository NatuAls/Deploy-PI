import { Link } from "react-router-dom"
import image from '../../images/dog.png'
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="nav">
            <Link className="linklogo" to='/'>
                <div className='divimage'>
                    <img className='imagelogo' src={image} alt='dogs logo'/>
                    <span className='henry'> Henry Dogs </span>
                </div>
            </Link>
            <ul>
                <Link className="navtext" to='/home'>Home</Link>
                <Link className="navtext" to='/create/breed'>Crear Raza</Link>
            </ul>
        </nav>
    )
}

export default NavBar;