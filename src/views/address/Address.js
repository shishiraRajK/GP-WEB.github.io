import React, { Component } from "react";

import building from "./../../assets/img/building.jpg";

import MapSection from "./Map";

import "./Address.scss";
import "./../../views/Heading.scss";

const location = {
  address: "Kissinger Str. 4297762, Hammelburg",
  lat: 50.11525,
  lng: 9.89417,
};

class Address extends Component {
  render() {
    return (
      <div>
        {/* <Container> */}
        <div>
          <h1 className="header"> HIER FINDEN SIE UNS</h1>
          <div className="border"></div>

          <div className="descNimg">
            <p style={{ color: "#5ECD73" }}>Praxisbezeichnung</p>
            <p>Praxis Dr. Dettner</p>
            <br></br>
            <p style={{ color: "#5ECD73" }}>Name</p>
            <p>Herr Dr. med. Ottmar Dettner</p>
            <br></br>
            <p style={{ color: "#5ECD73" }}>Facharztbezeichnung</p>
            <p>Facharzt für Allgemeinmedizin</p>
            <br></br>
            <p style={{ color: "#5ECD73" }}>Adresse</p>
            <p>Google Maps Adresse</p>
            <p> Kissinger Str. 42</p>
            <p>97762 Hammelburg</p>
            <br></br>
            <p>1. Stock - Treppenaufgang</p>
            <br></br>
            <p style={{ color: "#5ECD73" }}>Telefon</p>
            <p> 09732-1247</p>
            <br></br>
            <p style={{ color: "#5ECD73" }}>Telefax</p>
            <p> 09732-1869</p>
            <br></br>
            <p style={{ color: "#5ECD73" }}>E-Mail-Adresse</p>
            <p>praxisdrdettner@t-online.de</p>
          </div>

          <div>
            <div className="building" name-member="building">
              <picture>
                <source srcset={building} type="image/webp" />
                <img src={building} alt="building" />
              </picture>
            </div>
          </div>
        </div>

        <div className="map">
          <MapSection location={location} zoomLevel={17} />
        </div>

        {/* </Container> */}
      </div>
    );
  }
}

export default Address;
