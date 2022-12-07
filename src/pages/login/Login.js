import React, { useEffect, useContext } from "react";

import { NAVER_AUTH_URL ,KAKAO_AUTH_URL ,GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants';
import kakaoLogo from '../../img/kakao-logo.png';

import { AuthContext } from "../../context/Auth";
import { userStore } from '../../recoil/User';
import { useRecoilState } from 'recoil';

function Login() {
    const {UserInfo, setUserInfo} = useContext(AuthContext);
    
    return(        
        <div className="login-container">
            <div className="login-content">
                {/* {UserInfo.email ? <AlreadyLogin/> : <SocialLogin />} */}
                <SocialLogin />
            </div>
        </div>
    )
}

function AlreadyLogin(){
    return (
        <p>이미 로그인 함.</p>
    )
}

function SocialLogin(){
    return (
        <div className="social-login">
                 {/* <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                     <img src={googleLogo} alt="Google" /> Sign in with Google</a>
                 <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                     <img src={fbLogo} alt="Facebook" /> Sign in with Facebook</a>
                 <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
                     <img src={githubLogo} alt="Github" /> Sign in with Github</a> */}
                 <a className="btn btn-block social-btn kakao" 
                       href={KAKAO_AUTH_URL}
                     >
                     <img 
                    // onClick={() => socialLoginHandler({KAKAO_AUTH_URL})} 
                     src={kakaoLogo}
                     alt="Kakao" /></a>
                 {/* <a className="btn btn-block social-btn kakao" href={NAVER_AUTH_URL}>
                      <img src={naverLogo} alt="Naver" /> Sign in with Naver</a> */}

             </div>
    )
}

// class SocialLogin extends Component {
//     constructor(props){
//         super(props);
//         this.
//     }
   
//     render() {
//         const socialLoginHandler = (url) => {
//             // try{
//             //     axios.post(url, '', {
//             //         headers: {
//             //             "Content-Type": 'application/json',
//             //     }})
//             //     .then(res => {
//             //         alert("....res.data.header="+res.headers.get("Autorization"));
//             //         console.log("=="+res);
//             //     })
//             // }catch(e){
//             //     console.log(e);
//             // }
//         }
//         return (
//             <div className="social-login">
//                 {/* <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
//                     <img src={googleLogo} alt="Google" /> Sign in with Google</a>
//                 <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
//                     <img src={fbLogo} alt="Facebook" /> Sign in with Facebook</a>
//                 <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
//                     <img src={githubLogo} alt="Github" /> Sign in with Github</a> */}
//                 <a className="btn btn-block social-btn kakao" 
//                     // href={KAKAO_AUTH_URL}
//                     >
//                     <img 
//                     onClick={() => 
//                         socialLoginHandler({KAKAO_AUTH_URL})
//                         // setOrder(menu);
//                     } 
//                     src={kakaoLogo}
//                     alt="Kakao" /></a>
//                 {/* <a className="btn btn-block social-btn kakao" href={NAVER_AUTH_URL}>
//                      <img src={naverLogo} alt="Naver" /> Sign in with Naver</a> */}

//             </div>
//         );
//     }
// }

export default Login