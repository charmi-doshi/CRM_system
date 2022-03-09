
import "./App.css";

import background from "./pages/background.jpg";
import { Footer } from "./MyComponents/Footer";
import { Router, Route, Switch } from "react-router-dom";

import Navbar from "./MyComponents/Navbar";
import WorkListing from "./MyComponents/WorkListing";
import WorkLogListing from "./MyComponents/WorkLogListing";

import { AddClient } from "./pages/AddClient";
import { AddWorkList } from "./pages/AddWorkList";
import { AddDailyWorkLog } from "./pages/AddDailyWorkLog";

import ClientListing from "./MyComponents/ClientListing";
import { useState, useEffect } from "react";
import { WaveLoading } from "react-loadingg";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div>
        <div className="mainComp">
          
          
          <div className="comp">
            {/* <MainHeader/>  */}
            {/* < PersistentDrawerLeft/>       */}
            {/* <SideMenu/> */}

            <Navbar />
            <div>
              <Switch>
                <Route
                  path="/client/showclient"
                  exact
                  component={ClientListing}
                ></Route>
                <Route path="/worklist/showlist">
                  <WorkListing />
                </Route>
                <Route path="/transaction/showworklog">
                  <WorkLogListing />
                </Route>
                <Route path="/" exact component={AddClient}></Route>
                <Route
                  path="/client/addclient"
                  exact
                  component={AddClient}
                ></Route>
                <Route path="/worklist/addworklist" exact>
                  <AddWorkList />
                </Route>
                <Route path="/transaction/addworklog" exact>
                  <AddDailyWorkLog />
                </Route>
              </Switch>
            </div>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
        </div>
      ) : (
        <WaveLoading />
      )}
    </>
  );
}

export default App;
