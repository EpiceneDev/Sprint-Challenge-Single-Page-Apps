import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import EpisodeList from './components/EpisodeList';
import LocationsList from './components/LocationsList';
import CharacterList from "./components/CharacterList.js";
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      {/* <CharacterList /> */}
      <LocationsList />
      {/* <EpisodeList /> */}
    </main>
  );
}
