
export class Usuario{
  constructor(public token:string,
              public username:string,
              public empresa:empresa,
              public actions:string[],
              public lastLogin:string,
              public error:string){}
}
interface empresa{
  name: string;
  logo: string;
}
