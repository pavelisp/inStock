import Header from './components/Header/Header';
import "./App.scss";
import { Component } from "react";
import { Route,Redirect,Switch,BrowserRouter } from "react-router-dom";
import Warehouses from './pages/Warehouses/Warehouses';
import Inventory from './pages/Inventory/Inventory';
import axios from 'axios';
import WareHouseDetails from './components/WareHouseDetails/WareHouseDetails';


class App extends Component {
  state = {
    warehouses: null,
    inventory: null
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/inventory')
      .then(response => {
        this.setState({
          inventory: response.data
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
          <Route path="/warehouse" render={()=><Warehouses />} />
          <Route path="/inventory" render={()=> this.state.inventory && <Inventory inventory={this.state.inventory} />} />
          <Route path="/warehousedetails" render={()=><WareHouseDetails />} />
          {/* Routes are flexible right now, add or change as needed */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
