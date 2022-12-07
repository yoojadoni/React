import React,{useEffect, useContext} from "react";
import { useLocation, useParams } from 'react-router-dom';
// import QueryString from 'qs';
import jwt_decode from 'jwt-decode';

import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { userStore } from '../../recoil/User';
import { useRecoilState } from 'recoil';

function LoginSuccess() {
    const [LoginUser, setLoginUser] = useRecoilState(userStore);
    // setLoginUser({id:11, name:"kks", email:"testmail"});
    //파라미터 추출 및 JWT토큰 로컬 저장.
    const location = useLocation();
    const parmas = new URLSearchParams(location.search);
    localStorage.setItem(ACCESS_TOKEN, parmas.get('token'));
    localStorage.setItem(REFRESH_TOKEN, parmas.get('refreshToken'));
    useEffect(() => {
        if(localStorage.getItem(ACCESS_TOKEN)){
            var decode = jwt_decode(localStorage.getItem(ACCESS_TOKEN)); 
            setLoginUser({
                name:decode.name,
                email:decode.sub
            })
        }
    }, []);
    
    
    return(        
        <div className="login-container">
            <div className="login-content">
                로그인 성공
            </div>
        </div>
    );
}

export default LoginSuccess;