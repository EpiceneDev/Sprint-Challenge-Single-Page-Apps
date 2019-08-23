import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const panes = [
    { menuItem: 'Home Page', render: () => <Tab.Pane><NavLink exact to="/"></NavLink></Tab.Pane> },
    { menuItem: 'Characters', render: () => <Tab.Pane>Characters</Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane>Locations</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>Episodes</Tab.Pane> },
]
  
const TabNav = () => <Tab panes={panes} />

export default TabNav

