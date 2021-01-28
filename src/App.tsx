import React from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionList from './components/MissionInfo';

function App() {
  return (
    <div className="App">
      <MissionContainer />
      <MissionList />
    </div>
  );
}

export default App;
