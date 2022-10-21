import { Role } from './Role';

export class User {

    constructor(
      public userId: string = '',
      public firstName: string = '',
      public lastName: string = '',
      public email: string = '',
      public role: Role = new Role()
    ) {}

    get name() {
        return this.firstName + ' ' + this.lastName
    }
}
