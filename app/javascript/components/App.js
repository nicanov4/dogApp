import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BreedsList from './BreedsList';
import FavoritesList from './FavoritesList';
import Breed from './Breed';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => (
        <div>
	<Switch>
	<Route exact path="/breeds/:breed" component={Breed} />
	<Route exact path="/breeds" component={BreedsList}/>
	<Route exact path="/favorites" component={FavoritesList}/>
	</Switch>
	</div>
);

export default App;
