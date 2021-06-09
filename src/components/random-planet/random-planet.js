import React from "react";

import SwapiService from "../../services/swapi-service";
import ErrorMessage from "../error-message/error-message";
import Spinner from "../spinner/spinner";

import style from "./random-planet.module.css";

class RandomPlanet extends React.Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.interval = setInterval(this.updatePlanet, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (error) => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 10) + 2;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const loading = this.state.loading ? <Spinner /> : null;
    const content =
      !this.state.loading && !this.state.error ? (
        <PlanetView planet={this.state.planet} />
      ) : null;
    const error = this.state.error ? <ErrorMessage /> : null;

    return (
      <section className={`container ${style.container}`}>
        {loading}
        {content}
        {error}
      </section>
    );
  }
}

const PlanetView = ({ planet }) => {
  return (
    <>
      <div className={style.wrapper}>
        <h2>{planet.name}</h2>
        <ul className={style.list}>
          <li className={style.item}>
            <span>Population</span>
            <span>{planet.population}</span>
          </li>
          <li className={style.item}>
            <span>Rotation Period</span>
            <span>{planet.rotationPeriod}</span>
          </li>
          <li className={style.item}>
            <span>Diametr</span>
            <span>{planet.diameter}</span>
          </li>
        </ul>
      </div>
      <img
        className={style.image}
        src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`}
        alt="planet"
      />
    </>
  );
};

export default RandomPlanet;
