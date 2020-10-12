import React, { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {
  const [countries, setCountries] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchChange = value => {
    setSearchTerm(value);
  };

  const handleAddFavorites = (name) => {
    if(favorites.indexOf(name) === -1) {
      const newFavorites = [...favorites, name];
      setFavorites(newFavorites);
      console.log("Added", name);
    } else {
      console.log("Already in the list");
    }
    
  }

  useEffect(() => {
    const results = countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm)
    );
    setSearchResult(results);
    console.log(searchResult);
  }, [searchTerm]);


  useEffect(()=> {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err=> console.log(err))
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <Search handleSearchChange={handleSearchChange} 
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      favorites={favorites}>
      </Search>

      {
        searchTerm ? searchResult.map(country => <Country key = {country.alpha3Code} handleAddFavorites={handleAddFavorites} country = {country}></Country>)
        : countries.map(country => <Country key = {country.alpha3Code} handleAddFavorites={handleAddFavorites} country = {country}></Country>)
      }

      {/* {
        searchTerm !== null ? searchResult.map(country => <Country key = {country.alpha3Code} handleAddFavorites={handleAddFavorites} country = {country}></Country>)
        : countries.map(country => <Country key = {country.alpha3Code} handleAddFavorites={handleAddFavorites} country = {country}></Country>)
      } */}

      {/* {
        countries.map(country => <Country key = {country.alpha3Code} handleAddFavorites={handleAddFavorites} country = {country}></Country>)
      } */}
    </div>
  );
}

export default App;
