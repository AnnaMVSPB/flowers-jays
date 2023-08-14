import React from 'react';
import style from './flowers.module.css';
import { Flower } from './type';
import { useAppDispatch } from '../../store/store';
import { flowersDel } from './flowersSlice';

function FlowerCard({ flower }:{ flower:Flower }):JSX.Element {
  const dispatch = useAppDispatch();
    const delFlower = ():void => {
       dispatch(flowersDel(flower.id));
    };
  return (
    <div className={style.card}>
      <div className={style.divImg}>
        <img src={flower.url} alt="..." />
      </div>
  <h3>{flower.name}</h3>
  <h3>{flower.description}</h3>
  <button type="button" onClick={delFlower}>del</button>
    </div>
  );
}

export default FlowerCard;
