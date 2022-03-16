import { Component } from "react";
import InventoryList from "../../components/InventoryList/InventoryList";

class Inventory extends Component{

render(){
    return(
        <InventoryList inventory={this.props.inventory}/>
    )
}
    

}

export default Inventory;