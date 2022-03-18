import { Component } from "react";
import "./WarehouseList.scss";
import WarehouseItem from "../WarehouseItem/WarehouseItem";
import sortIcon from "../../assets/icons/sort-24px.svg"
import Modal from "../Modal/Modal"

class WarehouseList extends Component {
  state = {
    isModalOpen: true
  };

  handleWarehouseDelete = (id, name) => {

  }

  render() {
      
  if (this.state.isModalOpen){
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
    return (

      this.props.warehouses &&
      <div className="WarehouseList__wrapper">
      <div className="WarehouseList">
        <header className="WarehouseList__header">
          <h1 className="WarehouseList__title">Warehouses</h1>
          <input  className="WarehouseList__search"type="search" placeholder="Search..."/>
          <button className="WarehouseList__button">+ Add New Warehouse</button>
        </header>
        <section className="WarehouseList__list-section">
          <header className="WarehouseList__list-header">
            <h3 className="WarehouseList__list-header-warehouse WarehouseList__list-header-item">Warehouse <img className="WarehouseList__list-sort-icon" src={sortIcon} alt="sort icon" /></h3>
            <h3 className="WarehouseList__list-header-address WarehouseList__list-header-item">Address <img className="WarehouseList__list-sort-icon"  src={sortIcon} alt="sort icon" /></h3>
            <h3 className="WarehouseList__list-header-contact WarehouseList__list-header-item">Contact name <img className="WarehouseList__list-sort-icon" src={sortIcon} alt="sort icon" /></h3>
            <h3 className="WarehouseList__list-header-contact-info WarehouseList__list-header-item">Contact information <img className="WarehouseList__list-sort-icon" src={sortIcon} alt="sort icon" /></h3>
            <h3 className="WarehouseList__list-header-actions WarehouseList__list-header-item">Actions</h3>
          </header>
          <ul className="WarehouseList__list">
           { this.props.warehouses.map(warehouse => (
             <WarehouseItem key={warehouse.id} warehouse={warehouse}/>
           ))}

          </ul>
        </section>
      </div>
      { this.state.isModalOpen && <Modal isModalOpen={this.state.isModalOpen} type="warehouse"/>}
      </div>
    );
  }
}

export default WarehouseList;
