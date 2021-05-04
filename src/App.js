import './App.css';

import HaederManagement from './component/HaederManagement/HaederManagement';

import Loader from "react-loader-spinner";
import { useEffect, useState } from 'react';

function App() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])
  return (
    <>
      {
        loading ? <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
          <Loader
            type="BallTriangle" color="#00BFFF" height={80} width={80}
          />
        </div> : <HaederManagement></HaederManagement>
      }


    </>
  );
}

export default App;
