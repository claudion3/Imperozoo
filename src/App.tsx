import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Screens
import { AdminScreen } from './screens/Admin';
import { AnimalsScreen } from './screens/Animals';
import { HomeScreen } from './screens/Home';
//Components
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';

/**
 * @module App/Project
 * @category App
 */

/**
 * Project App where routing is set up for project.
 *
 * @component
 * @category App
 * @subcategory Project
 * @hideConstructor
 */

const App: React.FC = () => {
	const [sideToggle, setSideToggle] = useState<boolean>(false);
	console.log('see', sideToggle);
	return (
		<Router>
			<Navbar click={() => setSideToggle(true)} />
			<SideDrawer show={sideToggle} click={() => setSideToggle(false)} />

			<main>
				<Switch>
					<Route exact path='/' component={HomeScreen}></Route>
					<Route exact path='/animals/:id' component={AnimalsScreen}></Route>
					<Route exact path='/admin' component={AdminScreen}></Route>
				</Switch>
			</main>
		</Router>
	);
};

export default App;
