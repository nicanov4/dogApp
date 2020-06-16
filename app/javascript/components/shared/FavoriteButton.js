import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../actions/Actions';

const mapStateToProps = state => {
    const { breed } = state
    return {
	isFetching: breed.isFetching,
    };
};

class FavoriteButton extends React.Component {
    constructor(props) {
	super(props);
	this.addFavorite = this.addFavorite.bind(this);
	this.removeFavorite = this.removeFavorite.bind(this);
    }
    
    removeFavorite() {
	this.props.dispatch(deleteFavorite(this.props.favorite.id));
    }

    addFavorite() {
	const favorite = {breed: this.props.breed};
	this.props.dispatch(addFavorite(favorite));
    }

    render() {
	if (!this.props.favorite) {
	    return (
		    <Button variant="success" onClick={() => this.addFavorite()}>Favorite</Button>
	    );
	}
	return (
		<Button variant="danger" onClick={() => this.removeFavorite()}>Un-Favorite</Button>
	);
    }
}


FavoriteButton.propTypes = {
    favorite: PropTypes.shape(),
};

FavoriteButton.defaultProps = {
    match: undefined
};

export default connect(mapStateToProps, null)(FavoriteButton);
