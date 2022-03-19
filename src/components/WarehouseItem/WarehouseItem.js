import "./WarehouseItem.scss";
import { Link } from "react-router-dom";
import deleteButton from "../../assets/icons/delete_outline-24px.svg";
import editButton from "../../assets/icons/edit-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";

function WarehuseItem({
  warehouseNameForModal,
  handleWarehouseModalToggle,
  warehouse: {
    id,
    name,
    address,
    city,
    country,
    contact: { name: contactName, email, phone },
  },
}) {
  return (
    <li className="WarehouseItem" id={id}>
      <div className="WarehouseItem__info">
        <div className="WarehouseItem__warehouse WarehouseItem__box">
          <h4 className="WarehouseItem__header">Warehouse</h4>
          <Link
            className="WarehouseItem__text WarehouseItem__link"
            to={`/warehouses/${id}`}
          >
            {name}
            <img
              className="WarehouseItem__chevron"
              src={chevron}
              alt="chevron icon"
            />
          </Link>
        </div>
        <div className="WarehouseItem__address WarehouseItem__box">
          <h4 className="WarehouseItem__header">Address</h4>
          <p className="WarehouseItem__text WarehouseItem__address-text">
            <span className="WarehouseItem__multi-line">{address}</span>
            <span className="WarehouseItem__multi-line">{city},</span>
            <span className="WarehouseItem__multi-line">{country}</span>
          </p>
        </div>
        <div className="WarehouseItem__contact WarehouseItem__box">
          <h4 className="WarehouseItem__header">Contact name</h4>
          <p className="WarehouseItem__text">{contactName}</p>
        </div>
        <div className="WarehouseItem__contact-info WarehouseItem__box">
          <h4 className="WarehouseItem__header">Contact information</h4>
          <p className="WarehouseItem__text WarehouseItem__contact-info-text">
            <span className="WarehouseItem__multi-line">{phone}</span>
            <span className="WarehouseItem__multi-line">{email}</span>
          </p>
        </div>
      </div>
      <div className="WarehouseItem__actions">
        <span
          onClick={(e) => {
            handleWarehouseModalToggle(e);
            warehouseNameForModal(name);
          }}
          className="WarehouseItem__delete"
        >
          <img src={deleteButton} alt="delete button" />
        </span>
        <span className="WarehouseItem__edit">
          <img src={editButton} alt="delete button" />
        </span>
      </div>
    </li>
  );
}

export default WarehuseItem;
