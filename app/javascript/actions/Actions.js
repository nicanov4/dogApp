import axios from "axios";

export function loadAllBreeds() {
    return function(dispatch) {
	dispatch({ type: "FETCH_BREEDS_REQUEST"});
	return fetch('https://dog.ceo/api/breeds/list/all')
	    .then(response => response.json())
	    .then(breeds => {
		dispatch({type: "FETCH_BREEDS", payload: breeds.message})
	    })
    }
}

export function loadBreed(breedName) {
    return function(dispatch) {
	dispatch({ type: "FETCH_BREED_REQUEST"});
	return fetch(`https://dog.ceo/api/breed/${breedName}/images`)
	    .then(response => response.json())
	    .then(breed => {
		dispatch({type: "FETCH_BREED_PHOTOS", payload: breed.message})
	    })
    }
}

export function loadSubBreeds(breedName) {
    return function(dispatch) {
	dispatch({ type: "FETCH_SUBBREEDS_REQUEST"});
	return fetch(`https://dog.ceo/api/breed/${breedName}/list`)
	    .then(response => response.json())
	    .then(subBreeds => {
		dispatch({type: "FETCH_SUBBREEDS", payload: subBreeds.message})
	    })
    };
}

export function loadFavorite(breed) {
    return function(dispatch) {
	axios.get(`/favorites/${breed}.json`)
	    .then((response) => {
		dispatch({type: "FETCH_FAVORITE", payload: response.data})
	    })
    };
}

export function loadFavorites() {
    return function(dispatch) {
	dispatch({ type: "FETCH_FAVORITES_REQUEST"});
	axios.get('/favorites.json')
	    .then((response) => {
		dispatch({type: "FETCH_FAVORITES", payload: response.data})
	    })
    };
}

export function addFavorite(favorite) {
    return function(dispatch) {
	axios.post('/favorites.json', favorite)
	    .then((response) => {
		const breed = response.data
		dispatch({
		    type: 'ADD_FAVORITE',
		    payload: {
			breed,
		    },
		})
	    })
    }
}

export function deleteFavorite(favoriteId) {
    return function(dispatch) {
	axios.delete(`/favorites/${favoriteId}.json`)
	    .then((response) => {
		dispatch({
		    type: 'DELETE_FAVORITE',
		    payload: {
			favoriteId,
		    },
		})
	    })
    }
}
//Get a random breed image (for welcome page)
export const loadRandomBreed = () => {
    return (dispatch) => {
	return fetch('https://dog.ceo/api/breeds/image/random')
	    .then(response => response.json())
	    .then(randomBreed => {
		dispatch(getRandomBreed(randomBreed.message))
	    })
	    .catch(error => console.log(error));
    };
}
