import "./WareHouseDetails.scss";
import "../../components/InventoryCard/InventoryCard.scss";
import { Component } from "react";
import ArrowBack from "../../assets/icons/arrow_back-24px.svg";
import Editbtn from "../../assets/icons/edit-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ChevronRight from "../../assets/icons/chevron_right-24px.svg";
import WarehouseDetailsitem from "../WarehouseDetailsItem/WarehouseDetailsItem";
import SortIcon from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";
import InventoryModal from "../InventoryModal/InventoryModal";
import axios from "axios";

class WarehouseDetails extends Component {
  state = {
    inventoryName: null,
  };

  inventoryNameForModal = (inventoryName) => {
    this.setState({ inventoryName: inventoryName });
  };

  render() {
    const { warehouseId } = this.props.rProps.match.params;
    let warehouse = null;
    if (this.props.warehouses) {
      warehouse = this.props.warehouses.filter((wh) => {
        return wh.id === warehouseId;
      })[0];
    }

    return (
      warehouse && (
        <div className=" WarehouseDetails__wrapper">
          <div className="warehouseDetails">
            <header className="warehouseDetails__header">
              <Link to="/warehouses/">
                {" "}
                <img
                  className="warehouseDetails__back"
                  src={ArrowBack}
                  alt="arrow back icon"
                ></img>{" "}
              </Link>
              <h1 className="warehouseDetails__title">{warehouse.name}</h1>
              <img
                className="warehouseDetails__edit"
                src={Editbtn}
                alt="edit icon"
              ></img>
            </header>
            <section className="warehouseDetails__info">
              <div className="warehouseDetails__left">
                <div className="warehouseDetails__address">
                  <h4 className="warehouseDetails__address-title">
                    WAREHOUSE ADDRESS:
                  </h4>
                  <p className="warehouseDetails__address-address">
                    469 King Street West,
                  </p>
                  <p className="warehouseDetails__address-address">
                    Toronto, CAN
                  </p>
                </div>
                <div className="warehouseDetails__contact">
                  <h4 className="warehouseDetails__contact-title">
                    CONTACT NAME:
                  </h4>
                  <p className="warehouseDetails__contact-name">Graeme Lyon</p>
                  <p className="warehouseDetails__contact-position">
                    Warehouse Manager
                  </p>
                </div>
              </div>
              <div className="warehouseDetails__right">
                <div className="warehouseDetails__contact">
                  <h4 className="warehouseDetails__contact-title">
                    CONTACT INFORMATION:
                  </h4>
                  <p className="warehouseDetails__contact-name">
                    +1 (647) 504-0911
                  </p>
                  <p className="warehouseDetails__contact-position">
                    glyon@instock.com
                  </p>
                </div>
              </div>
            </section>
            <div className="inventoryCardtableandDesktop__Header">
              <h4 className="inventoryCardtableandDesktop__title">
                INVENTORY ITEM
                <img
                  className="sortingimg"
                  src={SortIcon}
                  alt="sorting icon"
                ></img>
              </h4>
              <h4 className="inventoryCardtableandDesktop__title">
                CATEGORY
                <img
                  className="sortingimg"
                  src={SortIcon}
                  alt="sorting icon"
                ></img>
              </h4>
              <h4 className="inventoryCardtableandDesktop__title">
                STATUS
                <img
                  className="sortingimg"
                  src={SortIcon}
                  alt="sorting icon"
                ></img>
              </h4>
              <h4 className="inventoryCardtableandDesktop__title">
                QTY
                <img
                  className="sortingimg"
                  src={SortIcon}
                  alt="sorting icon"
                ></img>
              </h4>
              <h4 className="inventoryCardtableandDesktop__title">ACTIONS</h4>
            </div>

            <ul>
              {this.props.inventory &&
                this.props.inventory
                  .filter((item) => item.warehouseID === warehouseId)
                  .map((item) => (
                    <WarehouseDetailsitem
                      inventoryNameForModal={this.inventoryNameForModal}
                      handleInventoryDelete={this.props.handleInventoryDelete}
                      handleInventoryModalToggle={
                        this.props.handleInventoryModalToggle
                      }
                      item={item}
                    />
                  ))}
            </ul>
          </div>
          {this.props.isModalOpen && (
            <InventoryModal
              name={this.state.inventoryName}
              inventoryName={this.state.inventoryName}
              handleInventoryDelete={this.props.handleInventoryDelete}
              handleInventoryModalToggle={this.props.handleInventoryModalToggle}
            />
          )}
        </div>
      )
    );
  }
}

export default WarehouseDetails;
