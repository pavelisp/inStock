import { Component } from "react";
<<<<<<< HEAD
import AddWarehouse from "../../components/addWarehouse/addWarehouse"
class Warehouses extends Component{
    
render(){
    return(
    <main>
        <AddWarehouse/>
    </main>
)}
    
=======
import { Route, Switch } from "react-router-dom";
import WarehouseDetails from "../../components/WareHouseDetails/WareHouseDetails";

class Warehouses extends Component{

    

    render() {
        return(
            <Switch>
                <Route path="/" exact />
                <Route path='/:warehouseId' render={(rProps)=>this.props.inventory && this.props.warehouses && <WarehouseDetails rProps={rProps} inventory={this.props.inventory} warehouses={this.props.warehouses} />} />
            </Switch>
        )
    }

    

>>>>>>> cd919082570d38207747aa8344192b432c4d4a92
}

export default Warehouses;