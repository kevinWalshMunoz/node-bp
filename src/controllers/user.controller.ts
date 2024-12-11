import { injectable } from 'tsyringe';

export interface IUserController {
    login(): true;
}

@injectable()
export class UserController implements IUserController {
    constructor() {}

    login(): true {
        console.log('login');
        return true;
    }
}