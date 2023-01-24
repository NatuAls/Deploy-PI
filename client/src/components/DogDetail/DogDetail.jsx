import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loading, getDog } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import BlackBlock from "../BlackBlock/BlackBlock";
import Loader from "../Loader/Loader";
import image from '../../images/istockphoto-1223195737-612x612.jpg'
import './DogDetail.css'



function DogDetail(){

    const {id} = useParams();
    const breed = useSelector(state => state.breed);
    const loader = useSelector(state => state.loader);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData(){
            dispatch(loading());
            await dispatch(getDog(id));
            dispatch(loading());
        }
        fetchData();
    }, [dispatch, id]);

    if(Object.keys(breed).length > 0 && !breed.image) breed.image = image;
    if(Object.keys(breed).length > 0 && !breed.temperament) breed.temperament = 'Sin especificar';
    if(Object.keys(breed).length > 0 && !breed.life_span) breed.life_span = 'Sin especificar';

    return(
        <div className="divdetail">
            <NavBar/>
            <div id="titulodetail" className="divtitulo">
                <h1 className="titulodetail">Detalle de la raza {breed.name}</h1>
            </div>
            {loader === true && <Loader/>}
            {loader === false && <div className="detailcontenedor">
                <img src={breed.image} alt={breed.name} className='imagedetail'/>
                <div className="textdetail">
                    <h1>{breed.name}</h1>
                    <p>Altura: <span> {breed.height} cm</span></p>  
                    <p>Peso: <span> {breed.weight} Kg</span></p>
                    <p>Esperanza de vida: <span> {breed.life_span}</span></p>
                    <p>Temperamento(s): <span> {breed.temperament}</span></p>              
                </div>
            </div>}
            <BlackBlock/>
        </div>
    )
}

export default DogDetail;