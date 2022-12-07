import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/User';
import jwt_decode from 'jwt-decode';
import { ACCESS_TOKEN } from '../constants/index';

export function SetUser(){
    const [LoginUser, setLoginUser] = useRecoilState(userState);
    var decode = jwt_decode(localStorage.getItem(ACCESS_TOKEN)); 
    const newLoginUser = {
        email: decode.sub,
        name: decode.name,
    }
    console.log(newLoginUser);
    // setLoginUser(newLoginUser);
}

export function GetUserInfo(){
    
}