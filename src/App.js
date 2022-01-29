import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import { selectUser } from './features/authentication/userSlice'
import Signin from './components/Authentication/Signin';

function App() {
  
  const user = useSelector(selectUser)

  return (
    
    <div>
      {
        !user ? <Signin /> : (
          <div>
            <Header />
            <div className="App">
              <div className='app__container'>
                <Sidebar />
                <Feed />
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
