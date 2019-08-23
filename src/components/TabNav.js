import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";
import WelcomePage from "./WelcomePage";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const panes = [
    { menuItem: 'Home Page', render: () => <Tab.Pane >{WelcomePage}</Tab.Pane> },
    { menuItem: 'Characters', render: () => <Tab.Pane>{CharacterList}</Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane>{LocationsList}</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>{EpisodeList} </Tab.Pane> },
]

// class OnTabChange extends Component {
//     state = {}
  
//     handleChange = (e, data) => this.setState(data)
  
  
const TabNav = () => <Tab panes={panes} />

export default TabNav

