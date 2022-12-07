import React, {useContext, useEffect} from 'react';
import { AuthContext } from '../context/Auth';
import './css/Profile.css';
import jwt_decode from 'jwt-decode';
import { ACCESS_TOKEN } from '../constants/index';
import { Navbar, NavDropdown } from "react-bootstrap";
function Users(){
    const {UserInfo, setUserInfo} = useContext(AuthContext);
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

    return (
        <>
            <li>{UserInfo.name}님 환영합니다. {UserInfo.email}주소</li>
            <img src={UserInfo.picture}
            ></img>
        </>
        )
}


export default Users;