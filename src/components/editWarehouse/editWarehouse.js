import react from "react";
import axios from "axios";
import WarehouseForm from '../warehouseForm/warehouseForm';
import Header from '../Header/Header'



class editWarehouse extends react.Component {

    let axiosURL ="http://localhost:8080/warehouses/:id/edit";
    let title = "Edit Warehouse"
    let btnText = "Save"
    state = {
        currentWarehouse: {}
    }
    currentWarehouseDetails = (id) => {
       axios.get (`${axiosURL}/warehouses/${id}`)
       .then((response) => {
           const warehouseDetails = response.data;
           this.setState({
               currentWarehouse: warehouseDetails,
           });
       })
        .catch((err) => console.log(err));
    };

    componentDidMount(){
        const warehouseId = 
            this.props.match.params.warehouseId 
        this.currentWarehouseDetails(warehouseId)
    }

    render(){

        return(
            <>
            <Header/> 
            <WarehouseForm  warehouseInfo={this.state.currentWarehouse} title={this.title} btnText={this.btnText} />
            </>
        )


    }
}