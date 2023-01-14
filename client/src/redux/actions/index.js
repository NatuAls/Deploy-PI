import axios from 'axios';

export const GET_DOG = 'GET_DOG';
export const GET_DOGS = 'GET_DOGS';
export const GET_DOGS_BY_NAME = 'GET_DOGS_BY_NAME';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const POST_DOG = 'POST_DOG';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS';
export const FILTER_BY_EXISTING_C = 'FILTER_BY_EXISTING_C';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_WEIGHT = 'SORT_BY_WEIGHT';
export const LOADER = 'LOADER';

export const getDog = idBreed => {
    return async function(dispatch){
        await axios.get(`/dogs/${idBreed}`)
            .then(response => response.data)
            .then(data => dispatch({type: GET_DOG, payload: data}))
            .catch(error => dispatch({type: GET_DOG, payload: error.response.data}));
    }
}

export const getDogs = () => {
    return async dispatch => {
        await axios.get(`/dogs`)
            .then(response => response.data)
            .then(data => dispatch({type: GET_DOGS, payload: data}));
    }
}

export const getDogsByName = name => {
    return async dispatch => {
        await axios.get(`/dogs?name=${name}`)
            .then(response => response.data)
            .then(data => dispatch({type: GET_DOGS_BY_NAME, payload: data}))
            .catch(error => alert(error.response.data))
    }
}

export const getTemperaments = () => {
    return dispatch => {
        axios.get('/temperaments')
           .then(response => response.data)
           .then(data => dispatch({type: GET_TEMPERAMENTS, payload: data}));
    }
}

export const postDog = dog => {
    return async dispatch => {
        await axios.post('/dogs', dog)
            .then(response => dispatch({type: POST_DOG, payload: response.data}))
            .catch(error => alert(error.response.data));
    }
}

export const filterByTemperaments = payload => {
    return dispatch => dispatch({type: FILTER_BY_TEMPERAMENTS, payload});
}

export const filterByExistingC = payload => {
    return dispatch => dispatch({type: FILTER_BY_EXISTING_C, payload});
}

export const sortByName = payload => {
    return async dispatch => await dispatch({type: SORT_BY_NAME, payload});
}

export const sortByWeight = payload => {
    return async dispatch => await dispatch({type: SORT_BY_WEIGHT, payload});
}

export const setCurrentPage = (payload) => {
    return dispatch => dispatch({type: SET_CURRENT_PAGE, payload});
}

export const loading = () => {
    return dispatch => dispatch({type: LOADER});
}