import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BreedsList from './BreedsList';
import Breed from './Breed';

const App = () => (
        <div>
	<Switch>
	<Route exact path="/breeds/:breed" component={Breed} />
	<Route exact path="/breeds" component={BreedsList} />
	</Switch>
	</div>
);

export default App;
