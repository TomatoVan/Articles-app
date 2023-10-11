import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes,} from "react-router-dom";
import {useTheme} from "app/providers";
import {classNames} from "shared/lib/classNames/classNames";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


const App = () => {

	const {theme, toggleTheme} = useTheme();

	return (
	<div className={classNames('app', {}, [theme])}>
		<button onClick={toggleTheme}>TOGGLE</button>
		<Link to={'/'}>Главная</Link>
		<Link to={'/about'}>О сайте</Link>
		<Suspense fallback={<div>Loading...</div>}>

			<Routes>
				<Route path={'/'} element={<MainPage/>}/>
				<Route path={'/about'} element={<AboutPage/>}/>
			</Routes>
		</Suspense>

	</div>
	);
};

export default App;
