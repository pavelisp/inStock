import Header from "./components/Header/Header";
import "./App.scss";
import { Component } from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import Inventory from "./pages/Inventory/Inventory";
import axios from "axios";
import WarehouseDetails from "./components/WareHouseDetails/WareHouseDetails";

class App extends Component {
  state = {
    warehouses: null,
    inventory: null,
    isModalOpen: false,
    warehouseToDelete: null,
    inventoryToDelete: null
  };

  loadInventory = () => {
    axios
      .get("http://localhost:8080/warehouses")
      .then((response) => {
        this.setState({
          warehouses: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  loadWarehouses = () => {
    axios
      .get("http://localhost:8080/inventory")
      .then((response) => {
        this.setState({
          inventory: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // get all inventory items on load
    this.loadInventory();

    // get all warehouses on load
    this.loadWarehouses();
  }

  componentDidUpdate(){
    if (this.state.isModalOpen === true){
      document.body.style.overflow = "hidden";
      window.scrollTo({top: 0});
    } else {
      document.body.style.overflow = "scroll";
    }
    
  }

  handleWarehouseDelete = () => {
    axios.delete(`http://localhost:8080/warehouses/deletewarehouse/${this.state.warehouseToDelete}`)
    .then(res=> {
      this.setState({isModalOpen: false})
      axios
      .get("http://localhost:8080/warehouses")
      .then((response) => {
        this.setState({
          warehouses: response.data,
        });
      })
      .catch((err) => console.log(err));
    })
  };



  handleInventoryDelete = () => {
    axios.delete(`http://localhost:8080/warehouses/deleteitem/${this.state.inventoryToDelete}`)
    .then(res=> {
      this.setState({isModalOpen: false})
      axios
      .get("http://localhost:8080/inventory")
      .then((response) => {
        this.setState({
          inventory: response.data,
        });
      })
      .catch((err) => console.log(err));
    })
  };

  handleWarehouseModalToggle = (e) => {
      this.setState({ isModalOpen: !this.state.isModalOpen });
      e.target.parentNode.parentNode.parentNode.id.length === 36 ?
        this.setState({warehouseToDelete: e.target.parentNode.parentNode.parentNode.id}):
        this.setState({warehouseToDelete: null});

  };

  handleInventoryModalToggle = (e) => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    e.target.parentNode.parentNode.parentNode.id.length === 36 ?
      this.setState({inventoryToDelete: e.target.parentNode.parentNode.parentNode.id}):
      this.setState({inventoryToDelete: null});
      
};

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(renderProps) => (
              <WarehouseList
                handleWarehouseDelete={this.handleWarehouseDelete}
                isModalOpen={this.state.isModalOpen}
                handleWarehouseModalToggle={this.handleWarehouseModalToggle}
                inventory={this.state.inventory}
                renderProps={renderProps}
                warehouses={this.state.warehouses}
              />
            )}
          />
          <Route
            path="/warehouses/:warehouseId"
            exact
            render={(rProps) => (
              <WarehouseDetails
                handleInventoryModalToggle={this.handleInventoryModalToggle}
                rProps={rProps}
                inventory={this.state.inventory}
                warehouses={this.state.warehouses}
              />
            )}
          />
          <Route
            path="/warehouses"
            render={(renderProps) => (
              <WarehouseList
                handleWarehouseDelete={this.handleWarehouseDelete}
                isModalOpen={this.state.isModalOpen}
                handleWarehouseModalToggle={this.handleWarehouseModalToggle} 
                inventory={this.state.inventory}
                renderProps={renderProps}
                warehouses={this.state.warehouses}
              />
            )}
          />
          <Route
            path="/inventory"
            render={() =>
              this.state.inventory && (
                <Inventory inventory={this.state.inventory} />
              )
            }
          />
          {/* Routes are flexible right now, add or change as needed */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
