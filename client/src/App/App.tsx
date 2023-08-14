import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Registr from '../features/Auth/Registr';
import FlowersList from '../features/Flowers/FlowersList';
import * as api from '../features/Auth/api';

function App():JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    api.verificationFetch()
    .then((data) => dispatch({ type: 'auth/verification', payload: data }));
  }, []);
  return (

      <div className="App">
<Routes>
  <Route path="/" element={<Registr />} />
  <Route path="/flowers" element={<FlowersList />} />
</Routes>

      </div>

  );
}

export default App;
