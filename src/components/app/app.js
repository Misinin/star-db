import React from "react";
import SwapiService from "../../services/swapi-service";
import Header from "../header";
import ItemList from "../item-list";
import PeoplePage from "../people-page/people-page";
import RandomPlanet from "../random-planet";

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
    return (
      <>
        <Header />
        <main>
          <div className={`container ${style.layout}`}>
            <RandomPlanet />
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
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
