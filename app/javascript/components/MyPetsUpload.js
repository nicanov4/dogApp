import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { loadFavorites } from '../actions/Actions';
import ActiveStorageProvider from 'react-activestorage-provider'

class MyPetsUpload extends React.Component {
    constructor(props) {
	super(props);
    }

    componentDidMount() {
    }
    
    renderUpload() {
	return (
	    <ActiveStorageProvider
	endpoint={{
	    path: '/photos.json',
	    model: 'Photo',
	    attribute: 'image',
	    method: 'POST'
	}}
	onSuccess={(e) => method(e)}
	onSubmit={(e) => method(e)}
	render={({ handleUpload, uploads, ready }) => (
	        <div>
		<input
	    type="file"
	    disabled={!ready}
	    onChange={e => {
		return handleUpload(e.currentTarget.files)}}
	        />
		{uploads.map(upload => {
		    switch (upload.state) {
		    case 'waiting':
			return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
		    case 'uploading':
			return (
			        <p key={upload.id}>
				Uploading {upload.file.name}: {upload.progress}%
				</p>
			)
		    case 'error':
			return (
			        <React.Fragment key={upload.id}>
				<p key={upload.id}>
				Error uploading {upload.file.name}: {upload.error}
			    </p>
				</React.Fragment>
			)
		    case 'finished':
			return (
			        <React.Fragment key={upload.id}>
				<p key={upload.id}>Finished uploading {upload.file.name}</p>
				</React.Fragment>)
		    default:
			return null;
		    }
		})}
	    </div>
	)}
		/>
	);
    }
	    
    render() {
	return (
		<div>
		<Breadcrumb>
		<Breadcrumb.Item href="/breeds">Breeds List</Breadcrumb.Item>
		<Breadcrumb.Item href="/mypets">My Pets</Breadcrumb.Item>
		<Breadcrumb.Item active>Upload My Pet</Breadcrumb.Item>
		</Breadcrumb>

		<h2>Upload a photo of your pet!</h2>
		{this.renderUpload()}
		</div>
	);
    }
}

export default MyPetsUpload;
