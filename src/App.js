import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <div className='app__container'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
