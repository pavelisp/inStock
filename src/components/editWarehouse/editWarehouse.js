import react from "react";
import axios from "axios";
import WarehouseForm from '../warehouseForm/warehouseForm';
import Header from '../Header/Header'

axiosURL=""

class editWarehouse extends react.Component {
    title = "Edit Warehouse"
    btnText = "Save"
    state = {
        currentWarehouse: {}
    }
    currentWarehouseDetails = (id) => {
       axios.get (`${axiousURL}/warehouses/${id}`)
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