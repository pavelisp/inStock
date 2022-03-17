import Header from './components/Header/Header';
import "./App.scss";
import { Component } from "react";
import { Route,Redirect,Switch,BrowserRouter } from "react-router-dom";
import Warehouses from './pages/Warehouses/Warehouses';
import Inventory from './pages/Inventory/Inventory';
import axios from 'axios';
import WarehouseDetails from './components/WareHouseDetails/WareHouseDetails';


class App extends Component {
  state = {
    warehouses: null,
    inventory: null
  }

  componentDidMount() {

    // get all inventory items on load 

    axios
      .get('http://localhost:8080/inventory')
      .then(response => {
        this.setState({
          inventory: response.data
        })

      })
      .catch(err =>console.log(err))

      // get all warehouses on load 

      axios
      .get('http://localhost:8080/warehouses')
      .then(response => {
        this.setState({
          warehouses: response.data
        })

      })
      .catch(err =>console.log(err))
  }

  render(){
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact to="" />
          <Route path='/warehouses/:warehouseId' render={(rProps)=><WarehouseDetails rProps={rProps} inventory={this.state.inventory} warehouses={this.state.warehouses} />} />

          <Route path="/warehouses" render={(renderProps)=><Warehouses inventory={this.state.inventory} renderProps={renderProps} warehouses={this.state.warehouses} />} />
          <Route path="/inventory" render={()=> this.state.inventory && <Inventory inventory={this.state.inventory} />} />
          {/* Routes are flexible right now, add or change as needed */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
