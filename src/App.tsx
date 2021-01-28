import React from 'react';
import './App.css';
import MissionContainer from './components/Mission';
import MissionList from './components/MissionInfo';

function App() {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback(newId => {
    console.log(newId);
    setId(newId);
  }, []);
  return (
    <div className="App">
      <MissionContainer handleIdChange={handleIdChange}/>
      <MissionList  id={id}/>
    </div>
  );
}

export default App;
