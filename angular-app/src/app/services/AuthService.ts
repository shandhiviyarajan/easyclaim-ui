import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
    public static isLogin: boolean = false;

    public signIn() {

        AuthService.isLogin = true;
        return AuthService.isLogin;

    }

    public  signOut() {

        AuthService.isLogin = false;
        return AuthService.isLogin;

    }


}