import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard.js';
import EpisodeCard from './components/EpisodeCard';
import LocationCard from './components/LocationCard';
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <CharacterList />
      {/* <LocationCard />
      <EpisodeCard /> */}
    </main>
  );
}
