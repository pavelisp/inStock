import react from "react"
import "./addWarehouse.scss"


class warehouse extends react.Component {

    render(){
    return(
        <main className="add-warehouse">
            <h1 className="add-warehouse__header">Add New Wearhouse</h1>
            <div className="add-warehouse__container">
                <form className="add-warehouse__form">
                    <h2 className="add-warehouse__form--title">Warehouse Details</h2>
                        <div className="add-warehouse__line">                   
                        <label className="add-warehouse__form--name-label"> Warehouse Name</label>
                        <input className="add-warehouse__form--name-input" name="name" type="text" placeholder="Warehouse Name"></input>
                        </div> 
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--address-label"> Street Address</label>
                        <input className="add-warehouse__form--address-input" name="address" type="text" placeholder="Street Address"></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--city-label"> City</label>
                        <input className="add-warehouse__form--city-input" name="city" type="text" placeholder="City"></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--country-label"> Country</label>
                        <input className="add-warehouse__form--country-input" name="country" type="text" placeholder="Country"></input>
                        </div>
                    <h2 className="add-warehouse__form--title">Contact Details</h2>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--contact-label"> Contact Name</label>
                        <input className="add-warehouse__form--contact-input" name="contact" type="text" placeholder="Contact Name"></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--position-label"> Position</label>
                        <input className="add-warehouse__form--position-input" name="position" type="text" placeholder="Position"></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--phone-label"> Phone Number</label>
                        <input className="add-warehouse__form--phone-input" name="phone" type="text" placeholder="Phone Number"></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--email-label"> Email</label>
                        <input className="add-warehouse__form--email-input" name="email" type="text" placeholder="Email"></input>
                        </div>
                        <div>
                            <button className="add-warehouse__sumbit-button" type="submit">Add Warehouse</button>
                            <button className="add-warehouse__cancel-button" type="reset">Cancel</button> 
                        </div>
                </form>
            </div>
        </main>
    )
    }

}
export default warehouse