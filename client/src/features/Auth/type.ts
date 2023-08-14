export type Registr = {
    name:string;
    email:string;
    password:string;
};

export type User = {
    name:string;
    email:string;
    id:number;
};
 export type State = {
    user:User | {};
    error:string | undefined
 };
