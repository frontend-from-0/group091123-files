import { useContext } from 'react';
import './styles.css';
import {UserContext, UserDispatchContext,UserActionTypes} from '../..//userContext.jsx';


export const Navbar = () => {

  const User = useContext(UserContext);
  const dispatch = useContext (UserDispatchContext);

  function handleSignOutClick (){
    dispatch({type:UserActionTypes.logout})
  }

  function handleSignInClick(){
    dispatch({
      type:UserActionTypes.login,
      payload:{
      isLoggedInUser:true,
      username:'johndeck'}
    });
  }

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>Home</li>
        {User.isLoggedInUser ? <li>Account</li> : <></>}
        {User.isLoggedInUser ? 
          <li onClick={handleSignOutClick}>Sign out</li>: 
          <li oncick = {handleSignInClick}>Sign in</li>}
      </ul>
    </nav>
  )
}