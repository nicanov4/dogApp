import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BreedsList from './BreedsList';
import FavoritesList from './FavoritesList';
import Breed from './Breed';
import MyPets from './MyPets';
import MyPetsUpload from './MyPetsUpload';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => (
        <div>
	<Switch>
	<Route exact path="/breeds/:breed" component={Breed} />
	<Route exact path="/breeds" component={BreedsList}/>
	<Route exact path="/mypets/upload" component={MyPetsUpload}/>
	<Route exact path="/mypets" component={MyPets}/>
	<Route exact path="/favorites" component={FavoritesList}/>
	</Switch>
	</div>
);

export default App;
