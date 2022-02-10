import React from 'react';

import { useSelector } from 'react-redux';
import './App.css';

import { selectUser } from './features/authentication/userSlice'
import Signin from './components/Authentication/Signin';
import Home from './Home';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Signup from './components/Authentication/Signup';

function App() {
  
  const user = useSelector(selectUser)

  return (

    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<Navigate to={ !user ? "/signin" : "/" } />}
        />

       {
          !user ? (
            <>
              <Route path="/signin" element={ <Signin /> } />
              <Route path="/signup" element={ <Signup /> } />
            </>
                  
          )
                : <Route path="/" element={ <Home /> } />
       }

      </Routes>
    </BrowserRouter>
    
    // <div>
    //   {
    //     user ? <Signin /> : <Home />
    //   }
    // </div>
  );
}

export default App;
