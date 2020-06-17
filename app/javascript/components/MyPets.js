import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { loadFavorites } from '../actions/Actions';
import axios from "axios";

class MyPets extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    photos: []
	}
    }

    componentDidMount() {
	axios.get('/photos.json')
	    .then((response) => {
		this.setState({photos: response.data});
	    });
    }
    
    renderMyPets() {
	const photos = this.state.photos;
	return photos.map((photo) => (
		<li key={photo.id}>
		<img src={photo.image}/>
		</li>
	));
    }

    render() {
	return (
		<div>
		<Breadcrumb>
		<Breadcrumb.Item href="/breeds">Breeds List</Breadcrumb.Item>
		<Breadcrumb.Item active>My Pets</Breadcrumb.Item>
		</Breadcrumb>

		<h2>Photos of my pets!</h2>
		<Link to="/mypets/upload">Upload photo</Link>
		{this.renderMyPets()}
		</div>
	);
    }
}

export default MyPets;
