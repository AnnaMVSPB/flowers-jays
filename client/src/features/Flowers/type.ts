export type Flower = {
    name: string;
    id:number;
      userId: number;
      url: string;
      description: string;
};

export type Message = {
    message:string;
    id:number;
};
 export type State = {
    flowers:Flower[];
    error:string | undefined
 };
