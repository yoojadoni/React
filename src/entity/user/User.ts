import Gender from "../Gender";
import UserLevel from "./UserLevel";

export default class User {

    public id = '';
    public name = '';
    public email = '';
    public age = 0;
    public userLevel = UserLevel.NOT_JOIN;
    public gender = Gender.MALE;
    

    public getUserInfo(){
        console.log(this);
        return this;
    }
}