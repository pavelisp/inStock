import WareHouseDetails from "./components/WareHouseDetails/WareHouseDetails";
import "./App.scss";
import { Component } from "react";
import { Route,Redirect,Switch,BrowserRouter } from "react-router-dom";
import "./App.scss";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact to="" />
          <Route path="/warehouse" component={""} />
          <Route path="/inventory" component={""} />
          {/* Routes are flexible right now, add or change as needed */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
