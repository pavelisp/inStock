import react from "react"
import "./addWarehouse.scss"
import axios from "axios"


class warehouse extends react.Component {

    state = {
        nameValid: true,
        addressValid: true,
        cityValid: true,
        countryValid: true,
        contactValid: true,
        positionValid:true,
        phoneNumberValid: true,
        emailValid:true,
    }

    render(){
        const axiosURL = ""
        const handleSubmit = (e) => {
            let nameValid = true;
            if (e.target.name.value == ""){
                nameValid = false;
            }
            let addressValid = true;
            if(e.target.address.value == ""){
                addressValid = false;
            }
            let cityValid = true;
            if(e.target.city.value == ""){
                cityValid = false;
            }
            let countryValid = true;
            if(e.target.country.value == ""){
                countryValid = false;
            }
            let contactValid = true;
            if(e.target.contact.value == ""){
                contactValid = false;
            }
            let positionValid = true;
            if(e.target.position.valid == ""){
                positionValid = false;
            }
            let phoneNumberValid = true;
            if (e.target.phone.value.length < 10){
                phoneNumberValid = false;
            }
            let emailValid = true;
            if(!e.target.email.value.includes('@')){
                emailValid= false;
            }
            
            this.setState({
                nameValid,
                addressValid, 
                cityValid,
                countryValid,
                contactValid,
                positionValid,
                phoneNumberValid,
                emailValid
            })

            e.preventDefault(e);
            axios.post(`${axiosURL}/warehouses`,{
                name: e.target.name.value,
                address: e.target.address.value,
                city: e.target.city.value,
                country: e.target.country.value,
                contact: e.target.contact.value,
                position: e.target.position.value,
                phone: e.target.phone.value,
                email: e.target.email.value,
            })
            .catch(err => alert("All Lines of Form Must be filled."))

        };

    return(
        <main className="add-warehouse">
            <div className="add-warehouse__wrapper">
            <h1 className="add-warehouse__header">Add New Warehouse</h1>
            <div className="add-warehouse__container">
                <form onSubmit={handleSubmit} className="add-warehouse__form">
                        <div className="add-warhouse__form--section-1">
                    <h2 className="add-warehouse__form--title">Warehouse Details</h2>
                        <div className="add-warehouse__line">                   
                        <label className="add-warehouse__form--name-label"> Warehouse Name</label>
                        <input className={`add-warehouse__form--name-input ${this.state.nameValid ? "" : "add-warehouse__error"}`} name="name" type="text" placeholder="Warehouse Name"></input>
                        </div> 
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--address-label"> Street Address</label>
                        <input className={`add-warehouse__form--address-input ${this.state.addressValid ? "" : "add-warehouse__error"}`} name="address" type="text" placeholder="Street Address"></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--city-label"> City</label>
                        <input className={`add-warehouse__form--city-input ${this.state.cityValid ? "" : "add-warehouse__error"}`} name="city" type="text" placeholder="City"></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--country-label"> Country</label>
                        <input className={`add-warehouse__form--country-input ${this.state.countryValid ? "" : "add-warehouse__error"}`} name="country" type="text" placeholder="Country"></input>
                        </div>
                        </div>
                        <div className="add-warehouse__form--section-2">
                    <h2 className="add-warehouse__form--title">Contact Details</h2>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--contact-label"> Contact Name</label>
                        <input className={`add-warehouse__form--contact-input ${this.state.contactValid ? "" : "add-warehouse__error"}`} name="contact" type="text" placeholder="Contact Name"></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--position-label"> Position</label>
                        <input className={`add-warehouse__form--position-input ${this.state.positionValid ? "" : "add-warehouse__error"}`} name="position" type="text" placeholder="Position"></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--phone-label"> Phone Number</label>
                        <input className={`add-warehouse__form--phone-input ${this.state.phoneNumberValid ? "" : "add-warehouse__error"}`} name="phone" type="text" placeholder="Phone Number"></input>
                        </div>
                        <div className="add-warehouse__line">
                        <label className="add-warehouse__form--email-label"> Email</label>
                        <input className={`add-warehouse__form--email-input ${this.state.emailValid ? "" : "add-warehouse__error"}`} name="email" type="text" placeholder="Email"></input>
                        </div>
                        </div>
                        <div>
                            <button className="add-warehouse__button--cancel" type="reset">Cancel</button> 
                            <button className="add-warehouse__button--submit" type="submit">Add Warehouse</button>
                        </div>
                </form>
            </div>
        </div>
        </main>
    )
    }

}
export default warehouse