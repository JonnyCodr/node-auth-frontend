

export class User {

    constructor(
      public userId: string = '',
      public firstName: string = '',
      public lastName: string = '',
      public email: string = ''
    ) {}

    get name() {
        return this.firstName + ' ' + this.lastName
    }
}
