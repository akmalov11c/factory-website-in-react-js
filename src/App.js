import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Reviews from "./components/Reviews/Reviews";
import Service from "./components/Service/Service";
import Contacts from "./components/Contacts/Contacts";
import CatalogOne from "./components/Catalog/catalogs/CatalogOne";
import SendMassage from "./components/SendMassage/SendMassage";
import Footer from "./components/Footer/Footer";
import ServiceOne from "./components/Service/ServiceComponents/ServiceOne";
import ServiceTwo from "./components/Service/ServiceComponents/ServiceTwo";
import ServiceThree from "./components/Service/ServiceComponents/ServiceThree";
import ServiceFour from "./components/Service/ServiceComponents/ServiceFour";
import ServiceFive from "./components/Service/ServiceComponents/ServiceFive";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact>
          <Home />
          <Catalog />
          <Service />
          <SendMassage />
          <Contacts />
        </Route>
        <Route path="/catalog" component={Catalog} exact>
          <Catalog />
        </Route>
        <Route path="/catalog_1" component={CatalogOne} exact>
          <CatalogOne />
        </Route>
        <Route path="/service_1" component={ServiceOne} exact>
          <ServiceOne />
        </Route>
        <Route path="/service_2" component={ServiceTwo} exact>
          <ServiceTwo />
        </Route>
        <Route path="/service_3" component={ServiceThree} exact>
          <ServiceThree />
        </Route>
        <Route path="/service_4" component={ServiceFour} exact>
          <ServiceFour />
        </Route>
        <Route path="/service_5" component={ServiceFive} exact>
          <ServiceFive />
        </Route>
        <Route path="/about" component={About} exact>
          <About />
        </Route>
        <Route path="/service" component={Service} exact>
          <Service />
        </Route>
        <Route path="/reviews" component={Reviews} exact>
          <Reviews />
        </Route>
        <Route path="/contacts" component={Contacts} exact>
          <Contacts />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
