import { Component } from "react";
import "./WarehouseList.scss";

class WarehouseList extends Component {
  state = {};
  render() {
    return (
      <div className="WarehouseList">
        <header className="WarehouseList__header">
          <h1 className="WarehouseList__title">Warehouses</h1>
          <input  className="WarehouseList__search"type="search" placeholder="Search"/>
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
                <div className="WarehouseList__list-item-warehouse WarehouseList__list-item-box">
                  <h4 className="WarehouseList__list-item-header">Warehouse</h4>
                  <p className="WarehouseList__list-item-text">King West > </p>
                </div>
                <div className="WarehouseList__list-item-address WarehouseList__list-item-box">
                  <h4 className="WarehouseList__list-item-header">Address</h4>
                  <p className="WarehouseList__list-item-text WarehouseList__list-item-address-text"><span>469 King Street West,</span><span>Toronto,</span> <span>CAN</span></p>
                </div>
                <div className="WarehouseList__list-item-contact WarehouseList__list-item-box">
                  <h4 className="WarehouseList__list-item-header">Contact name</h4>
                  <p className="WarehouseList__list-item-text">Graeme Lyon</p>
                </div>
                <div className="WarehouseList__list-item-contact-info WarehouseList__list-item-box">
                  <h4 className="WarehouseList__list-item-header">Contact information</h4>
                  <p className="WarehouseList__list-item-text WarehouseList__list-item-contact-info-text"><span>+1 (647) 504-0911 </span><span>glyon@instock.com</span></p>
                </div>
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
