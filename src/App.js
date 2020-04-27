import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Cart from "./components/cart";
import Main from "./components/main";
import Gallery from "./components/gallery";
import Error from "./components/error";
import Details from "./components/details";
import About from "./components/about";
import GalleryProvider from "./context";
import Footer from "./components/footer";

const App = () => {
  return (
    <React.Fragment>
      <div>
        <GalleryProvider>
          <Router>
            <Navigation />
            <div
              className="container bg-white p-0"
              style={{ minHeight: "100vh" }}
            >
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/cart" component={Cart} />
                <Route path="/details" component={Details} />
                <Route path="/about" component={About} />
                <Route component={Error} />
              </Switch>
            </div>
            <Footer />
          </Router>
        </GalleryProvider>
      </div>
    </React.Fragment>
  );
};

export default App;
