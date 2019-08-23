import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";
import WelcomePage from "./WelcomePage";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const panes = [
    { menuItem: 'Home Page', render: () => <Tab.Pane><Route exact path='/' ></Route></Tab.Pane>},
    { menuItem: 'Characters', render: () => <Tab.Pane><Route path='/characters' ></Route></Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane>{LocationsList}</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>{EpisodeList} </Tab.Pane> },
]

// class OnTabChange extends Component {
//     state = {};
    
//     handleChange = (click, data) => {
//         const 
//         this.setState()}
//     };
  
//     render() {
//         return (
//           <div>
//             <Tab panes={panes} onTabChange={this.handleChange} />
//             {/* <Segment tertiary>
//               <pre>{JSON.stringify(this.state, null, 2)}</pre>
//             </Segment> */}
//           </div>
//         )
//       };
// }  
const TabNav = (menuItem) => <Tab panes={panes} />

export default TabNav

