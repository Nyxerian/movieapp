import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { FavoritesList } from "./components/FavoritesList";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";


import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">            
            <Add />
          </Route>
          <Route path="/WatchList">
          <Watchlist />
          </Route>
          <Route path="/FavoritesList">
            <FavoritesList />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
