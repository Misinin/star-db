import React from "react";
import SwapiService from "../../services/swapi-service";
import Header from "../header";
import ItemDetails, { Record } from "../item-details/item-details";
import ItemList from "../item-list";
import RandomPlanet from "../random-planet";
import Row from "../Row";

import style from "./app.module.css";

class App extends React.Component {
  state = {
    selectedItem: null,
  };

  swapiService = new SwapiService();

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { getPerson, getStarship, getPersonImage, getStarshipImage } =
      this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field={"gender"} label={"Gender"} />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field={"model"} label={"Model"} />
      </ItemDetails>
    );

    return (
      <>
        <Header />
        <main>
          <div className={`container ${style.layout}`}>
            {/* <RandomPlanet />
            <PeoplePage
              onItemSelected={this.onItemSelected}
              selectedPerson={this.state.selectedItem}
            />
            <div className={style.wrapper}>
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={({ name, diameter }) => `${name} (${diameter})`}
              />
            </div>
            <div className={style.wrapper}>
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllStarships}
                renderItem={(item) => item.name}
              />
            </div> */}
            <Row left={personDetails} rigth={starshipDetails} />
          </div>
        </main>
      </>
    );
  }
}

export default App;
