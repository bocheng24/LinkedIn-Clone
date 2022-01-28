import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <div className='app__container'>
          <Sidebar />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default App;
