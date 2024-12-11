import { injectable, inject } from 'tsyringe';
import { DependencyInjectionToken } from '../common/enums/enums';
import { IConfig } from '../models/config/IConfig';

export interface IUserService {
    login(): true;
}

@injectable()
export class UserService implements IUserService {
    constructor(@inject(DependencyInjectionToken.Config) private readonly config: IConfig) {}

    login(): true {
        return true;
    }
}
