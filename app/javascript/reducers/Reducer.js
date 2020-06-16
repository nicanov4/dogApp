
import { combineReducers } from 'redux';

const breeds = (state = { items: [], isFetching: false }, action) => {
    switch (action.type) {
    case "FETCH_BREEDS_REQUEST": {
	return {
	    ...state,
	    isFetching: true
	}
    }
    case "FETCH_BREEDS": {
	return {
	    items: action.payload,
	    isFetching: false,
	}
    }
    default:
	return state
    }
}

const breed = (state = { photos: [], isFetching: false}, action ) => {
    switch (action.type) {
    case "FETCH_BREED_REQUEST": {
	return {
	    ...state,
	    isFetching: true
	}
    }
    case "FETCH_BREED_PHOTOS": {
	return {
	    photos: action.payload,
	    isFetching: false,
	}
    }
    default:
	return state
    }
}

const subBreeds = (state = { items: [], isFetching: false }, action) => {
    switch (action.type) {
    case "FETCH_SUBBREEDS_REQUEST": {
	return {
	    ...state,
	    isFetching: true
	}
    }
    case "FETCH_SUBBREEDS": {
	return {
	    items: action.payload,
	    isFetching: false,
	}
    }
    default:
	return state
    }
}

const favorite = (state = { favorite }, action) => {
    switch (action.type) {
    case "FETCH_FAVORITE": {
	return {
	    favorite: action.payload,
	}
    }
    default:
	return state
    }
}

const favorites = (state =  {items: [], isFetching: false }, action) => {
    switch (action.type) {
    case "FETCH_FAVORITES_REQUEST": {
	return {
	    ...state,
	    isFetching: true
	}
    }
    case "FETCH_FAVORITES": {
	return {
	    items: action.payload,
	    isFetching: false,
	}
    }
    case "ADD_FAVORITE": {
	const { breed } = action.payload;
	return {
	    ...state,
	    items: [...state.items, breed],
	}
    }
    case "DELETE_FAVORITE": {
	const { favoriteId } = action.payload;
	const newFavorites = [...state.items]
	return {
	    ...state,
	    items: newFavorites.filter(f => f.id !== favoriteId),
	}
    }
    default:
	return state
    }
}


const rootReducer = combineReducers({
    breeds,
    breed,
    subBreeds,
    favorites,
    favorite
});

export default rootReducer;
