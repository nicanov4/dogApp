import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { loadFavorites } from '../actions/Actions';

const mapStateToProps = state => {
    const { favorites } = state;
    return {
	favorites: favorites.items
    };
};

class FavoritesList extends React.Component {
    constructor(props) {
	super(props);
    }

    componentDidMount() {
	this.props.dispatch(loadFavorites());
    }

    renderFavorites() {
	const favorites = this.props.favorites;
	return favorites.map((fav) => (
		<li key={fav.id}>
		<Link to={`/breeds/${fav.breed}`}>
		{fav.breed}
	    </Link>
		</li>
	));
    }

    render() {
	return (
		<div>
		<Breadcrumb>
		<Breadcrumb.Item href="/breeds">Breeds List</Breadcrumb.Item>
		<Breadcrumb.Item active>Favorites List</Breadcrumb.Item>
		</Breadcrumb>
		<h2>Favorites</h2>
		<ul>{this.renderFavorites()}</ul>
		</div>
	);
    }
}

export default connect(mapStateToProps, null)(FavoritesList);
