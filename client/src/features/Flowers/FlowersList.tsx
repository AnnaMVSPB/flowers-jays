import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import FlowerCard from './FlowerCard';
import { RootState, useAppDispatch } from '../../store/store';
import { flowersInit } from './flowersSlice';

function FlowersList():JSX.Element {
  const dispatch = useAppDispatch();
  const flowers = useSelector((store:RootState) => store.flowers.flowers);

     useEffect(() => {
      dispatch(flowersInit());
     }, [dispatch]);
  return (
    <div>
        {flowers.map((flower) => <FlowerCard flower={flower} key={flower.id} />)}
    </div>
  );
}

export default FlowersList;
