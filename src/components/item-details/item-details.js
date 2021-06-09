import React from "react";
import SwapiService from "../../services/swapi-service";

import style from "./item-details.module.css";

const Record = ({ item, field, label }) => {
  return (
    <li className={style.item}>
      <span>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

class ItemDetails extends React.Component {
  state = {
    item: null,
    image: null,
  };

  swapiService = new SwapiService();

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId).then((item) =>
      this.setState({ item, image: getImageUrl(item) })
    );
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  render() {
    if (!this.state.item) {
      return <span>Select person from list</span>;
    }

    const { item, image } = this.state;

    console.log(this.props.children);

    return (
      <section className={`container ${style.container}`}>
        <div className={style.wrapper}>
          <h2>{item.name}</h2>
          <ul className={style.list}>
            {React.Children.map(this.props.children, (child, index) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
        <img className={style.image} src={image} alt="person" />
      </section>
    );
  }
}

export default ItemDetails;
