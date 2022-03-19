import "./WarehouseModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg"

function WarehouseModal({ warehouseName, handleWarehouseModalToggle, handleWarehouseDelete}) {
  return (
    <>
      <div className="Modal">
        <div className="Modal__wrapper">
          <span className="Modal__close"><img onClick={handleWarehouseModalToggle} src={closeIcon} className="Modal__close-icon" alt="close window icon" /></span>
          <div className="Modal__content">
            <h1 className="Modal__title">Delete {warehouseName} warehouse?</h1>
            <p className="Modal__text">
              Please confirm that you’d like to delete the {warehouseName} from the
              list of warehouses. You won’t be able to undo this action.
            </p>
          </div>
          <div className="Modal__actions">
            <button className="Modal__cancel" onClick={handleWarehouseModalToggle}>Cancel</button>
            <button onClick={handleWarehouseDelete} className="Modal__delete">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WarehouseModal;
