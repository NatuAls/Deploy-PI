import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions";
import './Paginado.css'

const Paginado = ({dogsPerPage, allDogs}) => {
    const pageNumbers = [];
    const currentPage = useSelector(state => state.currentPage)
    const dispatch = useDispatch();

    for(let i = 0; i < Math.ceil(allDogs / dogsPerPage); i++){
        pageNumbers.push(i + 1);
    }
    
    function paginado(number){
        dispatch(setCurrentPage(number))
    }

    return(
        <div className="divpages">
            <button className="prevbutton" onClick={() => paginado(currentPage === 1 ? pageNumbers.length : currentPage - 1)}>Anterior</button>
            {pageNumbers && pageNumbers.map(number => {
                return <button
                    className={`${currentPage === number ? 'currentbutton' : 'buttonpage'}`}
                    key={number} 
                    onClick={() => paginado(number)}
                >
                {currentPage === number ? <b>{number}</b> : number}
                </button>
            })}
            <button className="nextbutton" onClick={() => paginado(currentPage === pageNumbers.length ? 1 : currentPage + 1)}>Siguiente</button>
        </div>
    )
}

export default Paginado;