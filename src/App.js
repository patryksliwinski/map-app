import React, { useState } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.min.css";
import "./assets/css/style.css";
import Map from "./components/Map";
import MarkerList from "./components/MarkersList";
import { UncontrolledCollapse, Button } from "reactstrap";
import MarkerContext from './contexts/MarkerContext'

function App() {
  const [markersList, setMarkersList] = useState([]);
  const contextValue = { markersList, setMarkersList };
  return (
    <MarkerContext.Provider value={contextValue}>
      <div className="bg-dark">
        <div className="container min-vh-100 d-flex flex-column">
          <div className="item">
            <Button
              color="success"
              href="#"
              id="map-toggle"
              onClick={(e) => e.preventDefault()}
            >
              <i className="now-ui-icons location_world mr-2"></i>
            Map
          </Button>
            <UncontrolledCollapse
              className="h-100 map-collapse"
              role="tabpanel"
              toggler="#map-toggle"
              defaultOpen
            >
              <div className="map-container">
                <Map />
              </div>
            </UncontrolledCollapse>
          </div>
          <div className="item">
            <Button
              color="success"
              href="#"
              id="markers-list-toggle"
              onClick={(e) => e.preventDefault()}
            >
              <i className="now-ui-icons design_bullet-list-67 mr-2"></i>
            Marker List
          </Button>
            <UncontrolledCollapse role="tabpanel" toggler="#markers-list-toggle">
              <MarkerList />
            </UncontrolledCollapse>
          </div>
        </div>
      </div>
    </MarkerContext.Provider>
  );
}

export default App;
