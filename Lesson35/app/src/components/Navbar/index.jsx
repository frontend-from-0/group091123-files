import './styles.css';
import { UserContext, UserDispatchContext, UserActionTypes } from '../../UserContext.jsx';
import { useContext } from 'react';

export const Navbar = () => {
	const user = useContext(UserContext);
	const dispatch = useContext(UserDispatchContext);

	function handleSignOutClick() {
		dispatch({ type: UserActionTypes.logout });
	}

	function handleSignInClick() {
		dispatch({
			type: UserActionTypes.login,
			payload: { isLoggedInUser: true, username: 'johndoe01' },
		});
	}

	return (
		<nav className='navigation'>
			<ul className='navigation-list'>
				<li>Home</li>
				{user.isLoggedInUser ? <li>Account</li> : <></>}
				{user.isLoggedInUser ? (
					<li onClick={handleSignOutClick}>Sign out</li>
				) : (
					<li onClick={handleSignInClick}>Sign in</li>
				)}
			</ul>
		</nav>
	);
};
