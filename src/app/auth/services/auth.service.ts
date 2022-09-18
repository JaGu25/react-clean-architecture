import { User } from '../domain/user';

const login = async (): Promise<User> => {
    let user: User = { name: "tony", email: "albitestapia25@gmail.com", isLogged: true }
    await takeABreak();
    return user;
}

const takeABreak = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2500);
    })
}

const AuthService = {
    login
}

export default AuthService