import React, { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {
  const [countries, setCountries] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorites = (name) => {
    if(favorites.indexOf(name) === -1) {
      const newFavorites = [...favorites, name];
      setFavorites(newFavorites);
      console.log("Added", name);
    } else {
      console.log("Already in the list");
    }
    
  }

  useEffect(()=> {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err=> console.log(err))
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <Search favorites={favorites}></Search>
      {
        countries.map(country => <Country key = {country.alpha3Code} handleAddFavorites={handleAddFavorites} country = {country}></Country>)
      }
    </div>
  );
}

export default App;
