import "./InventoryModal.scss";
import closeIcon from "../../assets/icons/close-24px.svg"

function InventoryModal({ name, handleInventoryModalToggle, handleInventoryDelete}) {
  return (
    <>
      <div className="Modal">
        <div className="Modal__wrapper">
          <span className="Modal__close"><img onClick={handleInventoryModalToggle} src={closeIcon} className="Modal__close-icon" alt="close window icon" /></span>
          <div className="Modal__content">
            <h1 className="Modal__title">Delete {name} inventory item?</h1>
            <p className="Modal__text">
              Please confirm that you’d like to delete the {name} from the
              list of inventory items. You won’t be able to undo this action.
            </p>
          </div>
          <div className="Modal__actions">
            <button className="Modal__cancel" onClick={handleInventoryModalToggle}>Cancel</button>
            <button onClick={handleInventoryDelete} className="Modal__delete">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InventoryModal;
