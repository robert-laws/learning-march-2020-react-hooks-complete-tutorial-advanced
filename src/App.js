import React from 'react';

import './App.scss';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <main className="App">
      <header>
        App Header
      </header>
      <Dashboard />
      <footer>
        App Footer
      </footer>
    </main>
  );
}

export default App;
