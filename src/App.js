import Header from './components/Header/Header';
import InventoryList from './components/InventoryList/InventoryList';
import WareHouseDetails from "./components/WareHouseDetails/WareHouseDetails";
import AddWarehouse from "./components/addWarehouse/addWarehouse"
import "./App.scss";
import { Component } from "react";
import { Route,Redirect,Switch,BrowserRouter } from "react-router-dom";


class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact to="" />
          <Route path="/warehouse" component={""} />
          <Route path="/inventory" component={InventoryList} />
          {/* Routes are flexible right now, add or change as needed */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
