// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Pages from './components/Pages';

function App()
{
  return (

    <div className="flex">
      <Sidebar />

      <main className="p-4">
        <Pages />
      </main>
    </div>

  );
}

export default App;
