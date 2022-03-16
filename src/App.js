import Header from './components/Header/Header';
import InventoryList from './components/InventoryList/InventoryList';
import WareHouseDetails from "./components/WareHouseDetails/WareHouseDetails";
import "./App.scss";
import { Component } from "react";
import { Route,Redirect,Switch,BrowserRouter } from "react-router-dom";
import WarehouseList from './components/WarehouseList/WarehouseList';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact to="" />
          <Route path="/warehouse" component={WarehouseList} />
          <Route path="/inventory" component={InventoryList} />
          {/* Routes are flexible right now, add or change as needed */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
