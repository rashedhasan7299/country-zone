import React, { useEffect, useState } from 'react';
import './Country.css';

const Country = (props) => {
    const [money, setMoney] = useState([]);
    const [speech, setSpeech] = useState([]);
    const {name, population, flag, region, capital, currencies, languages, area} = props.country;
    const handleAddFavorites = props.handleAddFavorites;

    useEffect(()=> {
        const note = currencies.map(currency=> {
            if(currency.code !== "null") {
                return currency.name;
            } else {
                return null;
            }
        });
        setMoney(note);

        const lang = languages.map(language=> {
            // console.log(language.name);
            return([...speech, language.name]);
        });
        setSpeech(lang);
    }, [])


    return (
        <div className='countrySection'>
            <div className='flag'>
                <img className='flagImage' src={flag} alt=""/>
                <h3>{name}</h3>
                <h5>Population: {population}</h5>
            </div>

            <div className='detailSection'>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
                <p className='inlineP'>Currency: </p>
                {
                    money.length === 1 ? money.map(mon=> <p className='inlineP'>{mon}</p>)
                    : money.map(mon=> <p className='inlineP'>{mon} , </p>)
                }
                <br/> <br/>

                <p className='inlineP'>Languages: </p>
                {
                    speech.length === 1 ? speech.map(sp => <p className='inlineP'>{sp}</p>)
                    : speech.map(sp => <p className='inlineP'>{sp} , </p>)
                }
                
                
                
                <p>Area: {area} square Km</p>
                {/* <p>Timezones: {timezones}</p> */}
            </div>

            <div>
                <button onClick={() => {handleAddFavorites (name)}} className='addBtn'>Add to favorites</button>
            </div>
        </div>
    );
};

export default Country;