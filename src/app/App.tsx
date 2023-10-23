import React, {Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {useTranslation} from "react-i18next";


const Component = () => {
	const {t, i18n} = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
	<div>
		<button onClick={toggle}>{t('test')}</button>
	</div>
	)

}

const App = () => {

	const {theme} = useTheme();

	return (
	<div className={classNames('app', {}, [theme])}>
		<Suspense fallback="">
			<Component/>
			<Navbar/>
			<AppRouter/>
		</Suspense>

	</div>
	);
};

export default App;
