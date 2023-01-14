import React from "react"
import { useDispatch } from "react-redux"
import { filterByExistingC, filterByTemperaments, getDogs, loading, setCurrentPage} from "../../redux/actions";

const FilterByExisting = () => {

    const dispatch = useDispatch();

    async function handleChange(e){
        e.preventDefault();
        const fTemps = document.getElementById('fTemps').value;
        if(e.target.value !== ''){
            dispatch(loading());
            document.getElementById('alphabetical').value = '';
            document.getElementById('byWeight').value = '';
            dispatch(setCurrentPage(1));
            await dispatch(getDogs());
            if(fTemps !== 'todos' && fTemps !== '') dispatch(filterByTemperaments(fTemps));
            await dispatch(filterByExistingC(e.target.value));
            dispatch(loading());
        }
    }

    return (
        <select onChange={handleChange} id='fExisting'>
            <option value=''>Filtrar por fuente</option>
            <option value='todos'>Todos</option>
            <option value='api'>{'Existente (api)'}</option>
            <option value='db'>{'Agregada (db)'}</option>
        </select>
    )
}

export default FilterByExisting