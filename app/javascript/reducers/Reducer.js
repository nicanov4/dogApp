
import { combineReducers } from 'redux';

const breeds = (state = { items: [] }, action) => {
    switch (action.type) {
    case "FETCH_BREEDS": {
	return {
	    items: action.payload
	}
    }
    default:
	return state
    }
}

const breed = (state = { photos: [], subBreeds: []}, action ) => {
    switch (action.type) {
    case "FETCH_BREED_PHOTOS": {
	return {
	    photos: action.payload
	}
    }
    default:
	return state
    }
}

const subBreeds = (state = { items: [] }, action) => {
    switch (action.type) {
    case "FETCH_SUBBREEDS": {
	return {
	    items: action.payload
	}
    }
    default:
	return state
    }
}


const rootReducer = combineReducers({
    breeds,
    breed,
    subBreeds
});

export default rootReducer;
