import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard.js';
import { Link } from 'react-router-dom';
// import { id } from "postcss-selector-parser";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);
  console.log("LocationList props: ", locations);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios.get(`https://rickandmortyapi.com/api/location`)
          .then(res => {
            console.log("Locations returned from api: ", res.data.results);
            
            setLocations(res.data.results);
            
          })
          .catch(err => console.log("Error in obtaining Locations from API"))
    
  }, []);

  return (
    <section className="character-list grid-view">
      {locations.map(location => ( 
        <Link to = './location/:id'>
          <LocationCard key = { location.id } location = { location } id = { location.id }/> 
        </Link >
      )
      )
      } 
    </section>
  );
}
