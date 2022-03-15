import { Component } from "react";
import "./WarehouseList.scss";

class WarehouseList extends Component {
  state = {};
  render() {
    return (
      <div className="WarehouseList">
        <header className="WarehouseList__header">
          <h1 className="WarehouseList__title">Warehouses</h1>
          <input type="search" />
          <button className="WarehouseList__button">+ Add New Warehouse</button>
        </header>
        <section className="WarehouseList__list-section">
          <header className="WarehouseList__list-header">
            <h3 className="WarehouseList__list-header-item">Warehouse</h3>
            <h3 className="WarehouseList__list-header-item">Address</h3>
            <h3 className="WarehouseList__list-header-item">Contact name</h3>
            <h3 className="WarehouseList__list-header-item">Contact information</h3>
            <h3 className="WarehouseList__list-header-item">Actions</h3>
          </header>
          <ul className="WarehouseList__list">
            <li className="WarehouseList__list-item">
              <div className="WarehouseList__list-item-info">
                <div></div>
              </div>
              <div className="WarehouseList__list-item-actions">
                <span className="WarehouseList__list-item-delete" />
                <span className="WarehouseList__list-item-edit" />
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default WarehouseList;
