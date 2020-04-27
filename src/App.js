import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Cart from "./components/cart";
import Main from "./components/main";
import Gallery from "./components/gallery";
import Error from "./components/error";
import Details from "./components/details";
import GalleryProvider from "./context";

const App = () => {
  return (
    <div className="container mt-3">
      <GalleryProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/cart" component={Cart} />
            <Route path="/details" component={Details} />
            <Route component={Error} />
          </Switch>
        </Router>
      </GalleryProvider>
    </div>
  );
};

export default App;
