import './App.css';
import { AppRouter } from './AppRouter';

export const App = () => {
	return (
		<div className='container'>
			<header className='header'>Recipe Search App</header>
			<AppRouter />
		</div>
	);
};
