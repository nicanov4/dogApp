import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { loadBreed } from '../actions/Actions';

const mapStateToProps = state => {
    const { breed } = state;
    return {
	breedPhotos: breed.photos,
    };
};

class Breed extends React.Component {
    constructor(props) {
	super(props);
	this.state= {
	    breedName: this.props.match.params.breed
	}
    }

    componentDidMount() {
	this.props.dispatch(loadBreed(this.state.breedName));
    }

    renderPhotos() {
	const breedPhotos = this.props.breedPhotos;
	return breedPhotos.map((photo) => (
	        <li key={photo}>
		<img src={photo}/>
	        </li>
	));
    }
    
    render() {
	console.log(this.props.breedPhotos);
	return (
		<div>
		<h2>{this.state.breedName}</h2>
		<ul>{this.renderPhotos()}</ul>
		</div>
	);
    }		    
}

Breed.propTypes = {
    match: PropTypes.shape(),
};

Breed.defaultProps = {
    match: undefined
};

export default connect(mapStateToProps, null)(Breed);
