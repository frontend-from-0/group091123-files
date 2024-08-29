import { createContext, useReducer, useState } from 'react';

export const UserContext = createContext();
export const UserDispatchContext = createContext();

export const UserProvider = ({ children, initialState }) => {
	const [user, dispatch] = useReducer(userReducer, initialState ?? {});

	return (
		<UserContext.Provider value={user}>
			<UserDispatchContext.Provider value={dispatch}>
				{children}
			</UserDispatchContext.Provider>
		</UserContext.Provider>
	);
};

// Action object

// {
//   type: 'login',
//   payload: {
//     isLoggedInUser: true,
// 		username: 'johndoe01',
//   }
// }

export const UserActionTypes = {
  login: 'login',
  logout: 'logout',
  update: 'update'
};

function userReducer(state, action) {
	switch (action.type) {
		case UserActionTypes.login:
			return action.payload;
		case UserActionTypes.logout:
			return { isLoggedInUser: false };
		case UserActionTypes.update:
			return { ...state, ...action.payload };
		default:
			throw Error(`Action type ${action.type} is not supported`);
	}
}
