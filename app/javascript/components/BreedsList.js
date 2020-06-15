import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { loadAllBreeds } from '../actions/Actions';

const mapStateToProps = state => {
    const { breeds } = state;
    return {
	breeds: breeds.items
    };
};

class BreedsList extends React.Component {
    constructor(props) {
	super(props);
    }

    componentDidMount() {
	this.props.dispatch(loadAllBreeds());
	console.log(this.props.breeds)
    }

    renderBreeds() {
	const breeds = Object.keys(this.props.breeds);
	return breeds.map((breed) => (
		<li key={breed}>
		<Link to={`/breeds/${breed}`}>
		{breed}
	        </Link>
		</li>
	));
    }
    
    render() {
	return (
		<div>
		<h2>Breeds</h2>
		<ul>{this.renderBreeds()}</ul>
		</div>
	);
    }
}


export default connect(mapStateToProps, null)(BreedsList);

