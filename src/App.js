import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import EpisodeList from './components/EpisodeList';
import LocationsList from './components/LocationsList';
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Link exact to='/'>Home Page</Link>
      <Link to='/characters'>Characters</Link>
      <Link to='/locations'>Locations</Link>
      <Link to='/episodes'>Episodes</Link>
      <Link exact to='/search' >Search your favorite character!</Link>
      <Switch>
        <Route exact path="/"
              component={WelcomePage} />
        <Route path="/characters" 
              component={CharacterList} />
        <Route path="/locations" 
              component={LocationsList} />
        <Route path="/episodes" 
              component={EpisodeList} />
        <Route path="/search" 
              component={SearchForm} />
      </Switch>

    </main>
  );
}
