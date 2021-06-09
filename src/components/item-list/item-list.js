import React from "react";
import Spinner from "../spinner";

import style from "./item-list.module.css";

class ItemList extends React.Component {
  state = {
    items: null,
  };

  componentDidMount() {
    this.props.getData().then((items) => this.setState({ items }));
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item)

      return (
        <li
          key={id}
          className={style.item}
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { items } = this.state;

    if (!items) {
      return <Spinner />;
    }

    const itemsList = this.renderItems(items);

    return <ul className={style.list}>{itemsList}</ul>;
  }
}

export default ItemList;
