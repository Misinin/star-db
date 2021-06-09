import React from "react";
import SwapiService from "../../services/swapi-service";

import style from "./person-details.module.css";

class PersonDetails extends React.Component {
  state = {
    persone: null,
  };

  swapiService = new SwapiService();

  updatePersone() {
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((persone) => this.setState({ persone }));
  }

  componentDidMount() {
    this.updatePersone();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePersone();
    }
  }

  render() {
    console.log(this.props.personId);

    if (!this.state.persone) {
      return <span>Select person from list</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.persone;

    return (
      <section className={`container ${style.container}`}>
        <div className={style.wrapper}>
          <h2>{name}</h2>
          <ul className={style.list}>
            <li className={style.item}>
              <span>Gender</span>
              <span>{gender}</span>
            </li>
            <li className={style.item}>
              <span>Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className={style.item}>
              <span>Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
        <img
          className={style.image}
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="person"
        />
      </section>
    );
  }
}

export default PersonDetails;
