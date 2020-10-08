import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Favorites from "./components/Favorite";

import Search from "./components/Search";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
        
          <Route exact path="/" component={Search} />
          <Route exact path="/reactjs-beer-lovers" component={Search} />
          <Route path="/favorite" component={Favorites} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
