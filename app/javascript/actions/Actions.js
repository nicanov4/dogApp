export function loadAllBreeds() {
    return function(dispatch) {
	return fetch('https://dog.ceo/api/breeds/list/all')
	    .then(response => response.json())
	    .then(breeds => {
		dispatch({type: "FETCH_BREEDS", payload: breeds.message})
	    })
    }
}

export function loadBreed(breedName) {
    return function(dispatch) {
	return fetch(`https://dog.ceo/api/breed/${breedName}/images`)
	    .then(response => response.json())
	    .then(breed => {
		dispatch({type: "FETCH_BREED_PHOTOS", payload: breed.message})
	    })
    }
}

//Get collection of images based on selected Breed
export const selectBreed = (breedName) => {
    return (dispatch) => {
	return fetch(`https://dog.ceo/api/breed/${breedName}/images`)
	    .then(response => response.json())
	    .then(breed => {
		dispatch(getBreed(breed.message))
	    })
	    .catch(error => console.log(error));
    };
}

//Get list of ALL subBreeds
export const loadSubBreeds = (breedName) => {
    return (dispatch) => {
	return fetch(`https://dog.ceo/api/breed/${breedName}/list`)
	    .then(response => response.json())
	    .then(subBreeds => {
		dispatch(getAllSubBreeds(subBreeds.message))
	    })
	    .catch(error => console.log(error));
    };
}

//Get collection of images based on selected subBreed
export const selectSubBreed = (breedName, subBreedName) => {
    return (dispatch) => {
	return fetch(`https://dog.ceo/api/breed/${breedName}/${subBreedName}/images`)
	    .then(response => response.json())
	    .then(subBreed => {
		dispatch(getSubBreed(subBreed.message))
	    })
	    .catch(error => console.log(error));
    };
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
