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
      {/* <TabNav /> */}
      <Link exact to='/'>Home Page</Link>
      <Link to='/characters'>Characters</Link>
      <Link to='/locations'>Locations</Link>
      <Link to='/episodes'>Episodes</Link>
      <Route path="/characters" 
            component={CharacterList} />
      <Route path="/locations" 
            component={LocationsList} />
      <Route path="/episodes" 
            component={EpisodeList} />
      <WelcomePage />
    </main>
  );
}
