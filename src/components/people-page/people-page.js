import React from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Row from "../Row";
import ErrorBoundry from "../error-boundry";

class PeoplePage extends React.Component {
  swapiService = new SwapiService();

  render() {
    const items = (
      <ItemList
        onItemSelected={this.props.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      ></ItemList>
    );

    const details = <PersonDetails personId={this.props.selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={items} rigth={details} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
