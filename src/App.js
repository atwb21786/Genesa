import React from 'react';
import './App.css';
import GenesaDefined from './images/genesadefinition.png';
import GenesaCover from './images/genesacover.jpg';
import CubeSphere from './images/CubeSphereBasic-WEB.jpg';
import CircleGardening from './images/circlegardening.jpg';
import ThirteenDimensions from './images/13dimensional.jpg';
import GenesaSixColor from './images/genesa 6 color.jpg';
import Genesa26Color from './images/genesa 26 color.jpg';
import GenesaBigForm from './images/genesa big form.jpeg';

function App() {
  return (
    <main className='App'>
      {/* content goes here */}
      <img src={GenesaDefined} alt="GenesaDefined"></img><br></br>
      <img src={CubeSphere} alt="CubeSphere"></img>
      <img src={CircleGardening} alt="CircleGardening"></img>
      <img src={ThirteenDimensions} alt="ThirteenDimensions"></img>
      <img src={GenesaCover} alt="GenesaCover"></img>
      <img src={GenesaSixColor} alt="GenesaSixColor"></img>
      <img src={Genesa26Color} alt="Genesa26Color"></img>
      <img src={GenesaBigForm} alt="GenesaBigForm"></img>
    </main>
  );
}

export default App;