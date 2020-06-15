import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import { loadBreed, loadSubBreeds } from '../actions/Actions';

const mapStateToProps = state => {
    const { breed } = state;
    const { subBreeds } = state;
    return {
	subBreeds: subBreeds.items,
	breedPhotos: breed.photos,
    };
};

class Breed extends React.Component {
    constructor(props) {
	super(props);
	this.state= {
	    filter: '',
	    breedName: this.props.match.params.breed
	}
	this.handleSubBreedChange = this.handleSubBreedChange.bind(this);
    }

    componentDidMount() {
	this.props.dispatch(loadBreed(this.state.breedName));
	this.props.dispatch(loadSubBreeds(this.state.breedName));
    }

    renderPhotos(breedPhotos) {
	return breedPhotos.map((photo) => (
	        <li key={photo}>
		<img src={photo}/>
	        </li>
	));
    }

    renderSubBreeds() {
	const subBreeds = this.props.subBreeds;
	
	if (subBreeds.length === 0) {
	    return (
		    <div>
		    <label>This breed has no sub-breeds</label>
		    </div>
	    );
	}
	return subBreeds.map((subBreed) => (
		<Button key={subBreed} onClick={() => this.handleSubBreedChange(subBreed)}>{subBreed}</Button>
	));
	    
    }

    handleSubBreedChange(subBreed) {
	this.setState({filter: subBreed});
    }
    
    render() {
	const breedPhotos = this.props.breedPhotos;
	const subBreedPhotos = breedPhotos
	      .filter(el => (el.indexOf(this.state.filter) > -1)); 
	return (
		<div>
		<Breadcrumb>
		<Breadcrumb.Item href="/">Breeds List</Breadcrumb.Item>
		<Breadcrumb.Item active>{this.state.breedName}</Breadcrumb.Item>
		</Breadcrumb>
		<h2>{this.state.breedName}</h2>
		<h4>Filter by sub-breeds:</h4>
		{this.renderSubBreeds()}
	        {this.renderPhotos(subBreedPhotos)}
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
