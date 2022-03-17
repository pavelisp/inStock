import { Component } from "react";
import back_arrow from "../../assets/icons/arrow_back-24px.svg"
import "./AddNewInventoryItem.scss";





class AddNewInventoryItem extends Component{
    state= {
        inStock: false
    };

    changeStockAvailabilityFalse = ()=>{
            this.setState({inStock:true});
    }

    changeStockAvailabilityTrue = ()=>{
            this.setState({inStock:false});
    }

    render(){
        return(
            <div className="addItem__container">
                <div className="header__wrapper">
                    <img className="header__backArrow" src={back_arrow} alt="Back arrow icon"/>
                    <h1 className="header__title">Add New Inventory Item</h1>
                </div>
                <div className="addItem__wrapper">
                    <div className="addItem__wrapper-left">
                        <h2 className="addItem__wrapper-title">Item Details</h2>
                        <h3 className="addItem__wrapper-label">Item Name</h3>
                        <textarea className="addItem__uploadName menus" placeholder="Item name" name="itemNameBox" type="text"></textarea>
                        <h3 className="addItem__wrapper-label">Description</h3>
                        <textarea className="addItem__uploadDescription menus menus-description" placeholder="Please enter a brief item description..." name="descriptionBox" type="text"></textarea>
                        <h3 className="addItem__wrapper-label">Category</h3>
                        <select className="menus" name="itemCategory" id="itemCategory" placeholder="Please select">
                            <option value="" disabled selected>Please Select</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Gear">Gear</option>
                            <option value="Apparel">Apparel</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Health">Health</option>
                        </select>
                    </div>
                    <div className="addItem__wrapper-right">
                        <h2 className="addItem__wrapper-title">Item Availability</h2>
                        <h3 className="addItem__wrapper-label">Status</h3>
                        <form className="addItem__form">
                            <input type="radio" name="stockOrNoStock" value="InStock"  onClick={this.changeStockAvailabilityTrue}></input>
                            <label className="button__label" for="InStock">In Stock</label>
                            <input type="radio" name="stockOrNoStock" value="OutofStock" onClick={this.changeStockAvailabilityFalse}></input>
                            <label className="button__label" for="OutofStock">Out of Stock</label>
                            <h3 className="addItem__wrapper-label">Quantity</h3>
                            <textarea className="addItem__quantity menus" placeholder="0" disabled={this.state.inStock}></textarea>
                            <h3 className="addItem__wrapper-label">Warehouse</h3>
                            <select className="menus" name="selectWarehouse" id="selectWarehouse" placeholder="Please Select">
                                <option value="" disabled selected>Please Select</option>
                                <option value="San Fran">San Fran</option>
                                <option value="Santa Monica">Santa Monica</option>
                                <option value="Seattle">Seattle</option>
                                <option value="Miami">Miami</option>
                            </select>
                        </form>
                        
                    </div>
                </div>
                <div className="addItem__buttonWrapper">
                    <button className="addItem__cancelButton">Cancel</button>
                    <button className="addItem__addButton">+ Add item</button>
                </div>

            </div>
        )
    }
}

export default AddNewInventoryItem;