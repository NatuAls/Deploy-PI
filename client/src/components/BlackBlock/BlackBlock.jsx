import React from "react";
import image from '../../images/dog.png'
import { Link } from "react-router-dom";
import './BlackBlock.css';

function BlackBlock() {
    return(
        <div className='divblack'>
            <Link className="linklogo" to='/'>
                <div className='divimageblock'>
                    <img className='imagelogo' src={image} alt='dogs logo'/>
                    <span className='henry'> Henry Dogs </span>
                </div>
            </Link>
        <span className="blackspan">© 2023 - Nahuel Alesso</span>
        </div>
    )
}

export default BlackBlock;