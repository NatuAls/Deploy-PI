import React from "react";
import image from '../../images/dog.png'
import './BlackBlock.css'

function BlackBlock() {
    return(
        <div className='divblack'>
            <div className='divimageblock'>
                <img className='imagelogo' src={image} alt='dogs logo'/>
                <span className='henry'> Henry Dogs </span>
            </div>
        <span>© 2023 - Nahuel Alesso</span>
        </div>
    )
}

export default BlackBlock;