import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import EpisodeList from './components/EpisodeList';
import LocationsList from './components/LocationsList';
import CharacterList from "./components/CharacterList.js";
import { Link, Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <WelcomePage />
      {/* <CharacterList /> */}
      {/* <LocationsList /> */}
      {/* <EpisodeList /> */}
      {/* <Link to = '/' >{WelcomePage}< /Link>  */}
      <Route path = "/characters/:id"
      render = {props => ( < CharacterList  {...props } />)} />
    </main>
  );
}
