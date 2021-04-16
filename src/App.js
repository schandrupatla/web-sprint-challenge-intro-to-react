import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
 import Character from './components/Character'
// import Characters from './components/Characters'

//Start Wars API
//keeping end point in a variable in case we want to change it instead of hard coding
const apiEndPoint = `people`;
const starWarApi = `https://swapi.dev/api/${apiEndPoint}/`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [dataStarWars, setdataStarWars] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get(starWarApi)
    .then((res) => {
      //console.log(res.data);
      setdataStarWars(res.data);
     })
    .catch((err) => {
      console.log(`Error during Star Wars data load :`, err)
    });
  },[]);

  return (
    <div className="App">
      <h1 className="Header">Star War Characters</h1>
      {dataStarWars.map(item=>{ 
        return (
       <Character key={item.name} dataArray = {item} > </Character>
      )})}
    </div>
  );
}

export default App;
