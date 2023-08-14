import { Flower, Message } from './type';

export const initFlowersFetch = async ():Promise<Flower[]> => {
    const res = await fetch('api/flowers');
    const data = await res.json();
    return data;
    };

    export const delFlowersFetch = async (idFlower:number):Promise<Message> => {
        const res = await fetch(`api/flowers/${idFlower}`, {
            method: 'delete',
        });
        const data = await res.json();
        return data;
        };
