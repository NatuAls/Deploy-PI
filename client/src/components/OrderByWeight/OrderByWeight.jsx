import React from "react";
import { useDispatch } from "react-redux";
import { loading, sortByWeight } from "../../redux/actions";

const OrderByWeight = () => {

    const dispatch = useDispatch();

    const handleChange = async e => {
        e.preventDefault();
        if(e.target.value !== ''){
            if(document.getElementById('alphabetical').value !== '') document.getElementById('alphabetical').value = '';
            dispatch(loading());
            await dispatch(sortByWeight(e.target.value));
            dispatch(loading());
        }
    }

    return(
        <select onChange={handleChange} id='byWeight'>
            <option value=''>Orden por peso</option>
            <option value='asc'>Menor a mayor</option>
            <option value='desc'>Mayor a menor</option>
        </select>        
    )
}

export default OrderByWeight;