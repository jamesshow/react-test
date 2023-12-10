import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter';
import AppLanguage from './components/context/AppLanguage';
import UseQueryApp from './components/useQuery/UseQueryApp';

function App() {
  return (
    <div>
       <Counter />
       <hr/>
      <AppLanguage />
      <hr/>
      <UseQueryApp />
    </div>
  )
}

export default App;
