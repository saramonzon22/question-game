import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../styles/App.css';
import api from '../services/api';
import localStorage from '../services/localStorage'

/* componentes */

import HeaderMain from './Header-main';
import HeaderFlag from './Header-flag'
import Main from './Main';
import MainFlags from './Main-flags'
import Footer from './Footer';









function App() {

  const [dataCountry, setDataCountry] = useState(localStorage.get('dataCountry', {}));

  const [datos, setDatos] = useState(
    localStorage.get("dataCountry", {
      id: '',
      name: '',
      languages: '',
      capital: '',
      currencies: '',
      region: '',
      lags: '',
    })
  );

  useEffect(() => {
    api.then((dataFromApi) => {
      localStorage.set('dataCountry', dataFromApi)
      setDataCountry(dataFromApi);
    })

  }, []);

  const handleChange = (dataFromApi) => {
    api(dataCountry).then((dataFromApi) => {
      setDataCountry(dataFromApi);
    })
  };



  const random = dataCountry[Math.floor(Math.random() * dataCountry.length)]


  return (
    <div>
      <Routes>
        <>
          <Route path='/' element={<><HeaderMain /><Main /><Footer /></>}></Route>
          <Route path='/flags' element={<><HeaderFlag /><MainFlags dataCountry={dataCountry} setDataCountry={setDataCountry} random={random} handleChange={handleChange} setDatos={setDatos} /><Footer /></>}></Route>
        </>
      </Routes>
    </div >
  );
}

export default App;