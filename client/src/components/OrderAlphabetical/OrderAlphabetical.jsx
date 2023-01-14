import React from "react";
import { useDispatch } from "react-redux";
import { loading, sortByName } from "../../redux/actions";

const OrderAlphabetical = () => {

    const dispatch = useDispatch();

    const handleChange = async e => {
        e.preventDefault();
        if(e.target.value !== ''){
            if(document.getElementById('byWeight').value !== '') document.getElementById('byWeight').value = '';
            dispatch(loading());
            await dispatch(sortByName(e.target.value));
            dispatch(loading());
        }
    }

    return(
        <select onChange={handleChange} id='alphabetical'>
            <option value=''>Orden Alfabético</option>
            <option value='asc'>A - Z</option>
            <option value='desc'>Z - A</option>
        </select>        
    )
}

export default OrderAlphabetical;