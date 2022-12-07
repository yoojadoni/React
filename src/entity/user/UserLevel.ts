import { ClassEnum } from 'class-enum';

export default class UserLevel extends ClassEnum<UserLevel>{

    public static readonly NOT_JOIN = new UserLevel("비회원");
    public static readonly JOIN_PROCEEDING = new UserLevel("가입 진행 중");
    public static readonly JOIN_SUCCESS = new UserLevel("가입 완료");
        
}