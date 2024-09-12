import './App.css';
import { AppRouter } from './AppRouter';
import { Navbar } from './shared-components/Navbar';

export const App = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<AppRouter />
			</div>
		</>
	);
};
