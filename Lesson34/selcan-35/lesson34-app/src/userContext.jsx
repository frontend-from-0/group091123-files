import { createContext, useReducer } from "react";

export const UserContext = createContext();
export const UserDispatchContext = createContext();


export const UserActionTypes ={
    login:'login',
    logout:'logout',
    update:'update'
}

export const UserProvider = ({children,initialState}) => {
const [user,dispatch] =  useReducer(userReducer,initialState ?? {}); 

// const [user,setUser] = useState(initialState ??());

return (
        <UserContext.Provider value={user}>
<UserDispatchContext.Provider value={dispatch}>
{children}
</UserDispatchContext.Provider>
    </UserContext.Provider>

);
};


function userReducer(state,action){
 switch(action.type){
    case UserActionTypes.login:
        return action.payload;
    case UserActionTypes.logout:
        return {isLoggedInUser:false};
        case UserActionTypes.update:
            return{...state,...action.payload};
            default: 
            throw Error('Action type ${action.type} is not supperted');
 }
}
