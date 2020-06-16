import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
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
		<Breadcrumb>
		<Breadcrumb.Item active>Breeds List</Breadcrumb.Item>
		</Breadcrumb>
		<h2>Breeds</h2>
		<Link to={`/favorites`}>
		Link to your favorite breeds
	    </Link>
		<ul>{this.renderBreeds()}</ul>
		</div>
	);
    }
}


export default connect(mapStateToProps, null)(BreedsList);

