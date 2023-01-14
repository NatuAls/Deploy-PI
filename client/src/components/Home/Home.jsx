import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { getDogs, getTemperaments, loading } from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import Loader from '../Loader/Loader';
import FilterByTemps from '../FilterByTemps/FilterByTemps';
import FilterByExisting from '../FilterByExisting/FilterByExisting';
import OrderAlphabetical from '../OrderAlphabetical/OrderAlphabetical';
import OrderByWeight from '../OrderByWeight/OrderByWeight';
import BlackBlock from '../BlackBlock/BlackBlock';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {

    const allDogs = useSelector(state => state.dogs);
    const currentPage = useSelector(state => state.currentPage);
    const loader = useSelector(state => state.loader);
    const dispatch = useDispatch();

    const dogsPerPage = 8;
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

    useEffect(() => {
        async function fetchData(){
            if(allDogs.length === 0 && document.getElementById('fExisting').value !== 'db'){
                dispatch(loading());
                await dispatch(getDogs());
                dispatch(getTemperaments());
                dispatch(loading());
            }
        }
        fetchData();
    }, [dispatch, allDogs]);

    return (
        <div className='background'>
            <NavBar/>
            <div className="divtitulo">
                <h1 className="titulodetail">Conoce a todas las razas de perros de Henry Dogs</h1>
            </div>
            { currentDogs.length >= 0 && <div className='divsearchandfilters'>
                <SearchBar/>
                <div className='divfilters'>
                    <FilterByTemps/>
                    <FilterByExisting/>
                    <OrderAlphabetical/>
                    <OrderByWeight/>
                </div>
            </div>}
            {loader === false && currentDogs.length > 0 && <Paginado
                dogsPerPage={dogsPerPage}
                allDogs={allDogs.length}
            />}
            <div className='cards'>
                {loader === true && <Loader/>}
                {currentDogs.length === 0 && loader === false && <div className='divnotfound'>
                    <div className='notfound'>
                    <h2>No se encontraron perros en la base de datos, si desea crear una raza nueva haz click 
                        <Link to='create/breed' className='link'> aquí</Link>
                    </h2>
                    </div>
                </div>}
                {loader === false && currentDogs.map(el => {
                    if(el.image && el.image.url) el.image = el.image.url;
                    return <Card 
                        key={el.id}
                        id={el.id}
                        name={el.name && el.name} 
                        image={el.image}
                        temperament={el.temperament} 
                        weight={el.weight}
                        createInDb={el.createInDb}
                    />
                })}
            </div>
            <div className='divpages2'>
            {loader === false && currentDogs.length > 0 && <Paginado
                dogsPerPage={dogsPerPage}
                allDogs={allDogs.length}
            />}
            </div>
            <BlackBlock/>
        </div>
    );        
}

export default Home;