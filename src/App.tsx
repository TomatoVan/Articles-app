import React, {useState} from 'react';
import {Suspense} from 'react';
import {Counter} from "./components/Counter";
import './styles/index.scss'
import {Link, Route, Routes,} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

export enum Theme {
	LIGHT = 'normal',
	DARK = 'dark'
}

const App = () => {


	const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

	const toggleTheme = () => {
		setTheme(theme => theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
	}

	return (
	<div className={`app ${theme}`}>
		<button onClick={toggleTheme}>TOGGLE</button>
		<Link to={'/'}>Главная</Link>
		<Link to={'/about'}>О сайте</Link>
		<Suspense fallback={<div>Loading...</div>}>

			<Routes>
				<Route path={'/'} element={<MainPageAsync/>}/>
				<Route path={'/about'} element={<AboutPageAsync/>}/>
			</Routes>
		</Suspense>

		<Counter/>
	</div>
	);
};

export default App;
