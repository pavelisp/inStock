import react from "react"
import axios from "axios"
import WarehouseForm from '../warehouseForm/warehouseForm'

class addwarehouse extends react.Component {
    
    var title= "Add New WareHouse";
    var  btnText = "Add Warehouse";
    render(){
        const axiosURL = ""
        const handleSubmit = (e) => {

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
            .catch(err => alert("Error when processing form. Please fill all Feilds."))

        };

    return(
        <main className="add-warehouse">
            <WarehouseForm title={this.title} btnText={this.btnText}/>
        </main>
    )
    }

}
export default addwarehouse
