import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import LeftColumn from "../components/LeftColumn";
import MiddleSection from "../components/MiddleSection";
import Search from "../components/Search";
import RightColumn from "../components/RightColumn";
import SongContainer from "../components/SongContainer";
import Settings from "../components/Settings";
const App = () => {
  return (
    <Router>
      <LeftColumn />
      <RightColumn />
      <Switch>
        <Route path="/leftcolumn" component={LeftColumn} />
        <Route exact path="/middlesection" component={MiddleSection} />
        <Route path="/Search" component={Search} />
        <Route path="/rightcolumn" component={RightColumn} />
        <Route path="/songcontainer" component={SongContainer} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default App;
