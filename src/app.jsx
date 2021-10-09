import React, { useState, useEffect } from 'react';

import SideMenu from './components/SideMenu.jsx';

function App() {
  return (
    <main id="app">
      <div className="layout">
        <SideMenu />
        <div className="layout__calendar">Calendar</div>
      </div>
    </main>
  );
}

export default App;
