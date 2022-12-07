import { createContext, useState, useEffect, useMemo, useReducer } from "react";
import jwt_decode from 'jwt-decode';
import { ACCESS_TOKEN } from '../constants/index';

export const AuthContext = createContext();

const initAuth = {
 
};

function reducer(state, action){
  console.log("유저정보 변경시작.");
  const userInfo = {
    email : action.user.email,
    name : action.user.name,
    picture: action.user.picture
  }
  return userInfo;
}


const AuthProvider = (props) => {
  const [UserInfo, setUserInfo] = useState(initAuth);
  useEffect(() => {
    if(localStorage.getItem(ACCESS_TOKEN)){
        var decode = jwt_decode(localStorage.getItem(ACCESS_TOKEN)); 
        setUserInfo({
            email: decode.sub,
            name: decode.name,
            picture: decode.picture
        })
    }
  }, []);

  // Reducer사용법
  // const [authUser, dispatch] = useReducer(reducer, initAuth);
  // 상태가 변할때만
  // const providerValue = useMemo(() => 
  //   ({authUser, setUserInfo}), [authUser, setUserInfo]);
  return (
    // state 사용시
    // <AuthContext.Provider value={{authUser, setUserInfo}}>
    // usememo
    // <AuthContext.Provider value={providerValue}>
    // Reducer사용시
    // <AuthContext.Provider value={dispatch}>
    <AuthContext.Provider value={{UserInfo, setUserInfo}}>
        {props.children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;


