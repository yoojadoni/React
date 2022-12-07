import axios, {AxiosInstance} from "axios";
import { ACCESS_TOKEN } from "../constants";

const CustomAxios = axios.create({
    baseURL: '',
    headers:{
        "Content-Type": 'application/json;charset=UTF-8'
        , "Access-Control-Allow-Origin": '*'
        , "Accept" : "application/json"
        , "apikey":'apikey'
        , "Authorization": ''
    }
});

//요청 타임아웃 설정
CustomAxios.defaults.timeout=2500;

//요청 인터셉터 추가
CustomAxios.interceptors.request.use(
    config =>{ //요청을 보내기 전에 수행할 로직
        const token = localStorage.getItem(ACCESS_TOKEN);
        config.headers.Authorization = "Bearer " + token
        return config;
    },
    error =>{
        //요청 에러가 발생했을 때 수행할 로직
        console.log(error); //디버깅
        return Promise.reject(error);
    }
);

//응답 인터셉터 추가
CustomAxios.interceptors.response.use(
    response =>{
        //응답에 대한 로직 작성
        const res = response.data;
        return res;
    },

    error=>{
        //응답 에러가 발생했을 때 수행할 로직
        console.log(error); //디버깅
        return Promise.reject(error);
    }
);

export default CustomAxios;