import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from './EpisodeCard.js';

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodeList, setEpisodeList] = useState("");
  // console.log("CharList props: ", props);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios.get(`https://rickandmortyapi.com/api/episode`)
          .then(res => {
            console.log("Episodes returned from api: ", res.data.results);
            setEpisodeList(res.data.results);
          })
          .catch(err => console.log("Error in obtaining Episodes from API"))
    
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
      {episodeList.map(episode => <EpisodeCard episode={episode} />)} 
      {/* <EpisodeCard episode={episodeList} /> */}
    </section>
  );
}
