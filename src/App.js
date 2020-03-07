import React from 'react';

import './App.scss';
import { UsersContextProvider } from './context/UsersContext';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <main className="App">
      <header>
        App Header
      </header>
      <UsersContextProvider>
        <Dashboard />
      </UsersContextProvider>
      <footer>
        App Footer
      </footer>
    </main>
  );
}

export default App;
