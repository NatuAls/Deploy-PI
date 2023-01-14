import { GET_DOG, GET_DOGS, GET_DOGS_BY_NAME, LOADER, GET_TEMPERAMENTS, FILTER_BY_TEMPERAMENTS, FILTER_BY_EXISTING_C, SET_CURRENT_PAGE, SORT_BY_NAME, SORT_BY_WEIGHT, POST_DOG } from "../actions";

const initialState = {
    dogs: [],
    breed: {},
    temperaments: [],
    loader: false,
    currentPage: 1
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DOG:
            if(typeof action.payload !== 'number'){
                return {
                    ...state,
                    breed: action.payload
                }
            }
            return {
                ...state,
                breed: state.dogs.filter(el => el.id === action.payload)[0]
            }
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload
            }
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                dogs: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        case POST_DOG:
            state.dogs.unshift(action.payload);
            return {
                ...state
            }
        case FILTER_BY_TEMPERAMENTS:
            if(action.payload === 'todos' || action.payload === '') return {...state}
            const result = state.dogs.filter(e => {
                if(e.temperament) return e.temperament.includes(action.payload)
                else return false
            });
            return {
                ...state,
                dogs: result
            }
        case FILTER_BY_EXISTING_C:
            if(action.payload === 'todos' || action.payload === '') return {...state}
            let filtered;
            if(action.payload === 'api'){
                filtered = state.dogs.filter(e => {
                if(e.createInDb) return false
                else return true
                });
            }
            if(action.payload === 'db'){
                filtered = state.dogs.filter(e => {
                if(e.createInDb) return true
                else return false
                });
            }
            return {
                ...state,
                dogs: filtered
            }
        case SORT_BY_NAME:
            const allNameDogs = state.dogs;
            const sortNameDogs = allNameDogs.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            if(action.payload === 'asc'){
                return {...state, dogs: sortNameDogs}
            }
            if(action.payload === 'desc'){
                return {...state, dogs: sortNameDogs.reverse()}
            }
            break;
        case SORT_BY_WEIGHT:
            const allWeightDogs = state.dogs;
            let sortWeightDogs;
            if(action.payload === 'asc'){
                sortWeightDogs = allWeightDogs.sort((a, b) => {
                    const weightA = a.weight.split(' - ');
                    const weightB = b.weight.split(' - ');
                    if (weightA.includes('Sin especificar')) return 1;
                    if (weightB.includes('Sin especificar')) return -1;
                    if (parseInt(weightA[0]) > parseInt(weightB[0])) return 1;
                    if (parseInt(weightA[0]) < parseInt(weightB[0])) return -1;
                    else{
                        if (weightA[1] === undefined) return -1;
                        if (weightB[1] === undefined) return 1;
                        if (parseInt(weightA[1]) > parseInt(weightB[1])) return 1;
                        else if (parseInt(weightA[1]) < parseInt(weightB[1])) return -1;
                        else return 0;              
                    }
                });
            }
            else {
                sortWeightDogs = allWeightDogs.sort((a, b) => {
                    const weightA = a.weight.split(' - ');
                    const weightB = b.weight.split(' - ');
                    if (weightA.includes('Sin especificar')) return 1;
                    if (weightB.includes('Sin especificar')) return -1;
                    if (parseInt(weightA[0]) < parseInt(weightB[0])) return 1;
                    if (parseInt(weightA[0]) > parseInt(weightB[0])) return -1;
                    else{
                        if (weightA[1] === undefined) return -1;
                        if (weightB[1] === undefined) return 1;
                        if (parseInt(weightA[1]) < parseInt(weightB[1])) return 1;
                        else if (parseInt(weightA[1]) > parseInt(weightB[1])) return -1;
                        else return 0;              
                    }
                });
            }
            return {...state, dogs: sortWeightDogs}
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }
        case LOADER:
            const loader = state.loader;
            return loader === true ? {...state, loader: false} : {...state, loader: true};       
        default:
            return {...state}
    }
}

export default rootReducer;