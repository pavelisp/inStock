import Header from './components/Header/Header';
import "./App.scss";
import { Component } from "react";
import { Route,Redirect,Switch,BrowserRouter } from "react-router-dom";
import Warehouses from './pages/Warehouses/Warehouses';
import Inventory from './pages/Inventory/Inventory';


class App extends Component {
  state = {
    warehouses: null,
    inventory: null
  }

  render(){
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact to="" />
          <Route path="/warehouse" render={()=><Warehouses />} />
          <Route path="/inventory" render={()=><Inventory />} />
          {/* Routes are flexible right now, add or change as needed */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
