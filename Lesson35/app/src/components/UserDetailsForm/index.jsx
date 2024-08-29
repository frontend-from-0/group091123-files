import { useState } from "react"
import './styles.css';

// TODO: Update component so that it's possible to change user name and save new user name in the UserContext
export const UserDetailsForm = () => {
  const [username, setUsername] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
  };

  return (
    <form className='user-details-form' onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} />
      <button type="submit">Save</button>
    </form>
  )
}