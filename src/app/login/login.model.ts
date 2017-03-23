export class LoginModel {
    constructor(
        public id: number,
        public name: string,
        public password: string,
        public email:string
    ){}
}


export class EmailModel {
    constructor(
        public value:string,
        public name:string
    ){}
}