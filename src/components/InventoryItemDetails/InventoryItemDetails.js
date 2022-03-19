import { Component } from "react";
import "./InventoryItemDetails.scss";
import back_arrow from "../../assets/icons/arrow_back-24px.svg"
import pencil from "../../assets/icons/edit-24px-white.svg"

class InventoryItemDetails extends Component{
    
    render(){
        const {InventoryItemDetails} = this.props 
        return(
            <div className="bigger__wrapper">
                <div className="itemDetails__container">
                    <div className="header__wrapper">
                        <img className="header__backArrow" src={back_arrow} alt="Back arrow icon"/>
                        <h1 className="header__title">Television</h1>
                        <button className="header__editButton-mobile"><img className="header__editButton-icon" src={pencil} /></button>
                        <button className="header__editButton-tablet"><img className="header__editButton-icon" src={pencil} />Edit</button>
                    </div>
                    <section className="info__container">
                        <div className="info__card left">
                            <div className="info__card-wrapper">
                                <label className="info__card-label">Item Description:</label>
                                <h3 className="info__card-description">This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</h3>
                            </div>
                            <div className="info__card-wrapper">
                                <label className="info__card-label">CATEGORY:</label>
                                <h3 className="info__card-description">Electronics</h3>
                            </div>
                        </div>
                        <div className="info__card right">
                            <div className="info__card-container">
                                <div className="info__card-wrapper info__card-wrapper-right">
                                    <label className="info__card-label">STATUS:</label>
                                    <h3 className="info__card-description info__card-description-instock">IN STOCK</h3>
                                </div>
                                <div className="info__card-wrapper info__card-wrapper-right">
                                    <label className="info__card-label">QUANTITY:</label>
                                    <h3 className="info__card-description">500</h3>
                                </div>
                            </div>
                            <div className="info__card-container">
                                <div className="info__card-wrapper info__card-wrapper-right">
                                    <label className="info__card-label">WAREHOUSE:</label>
                                    <h3 className="info__card-description">MANHATTAN</h3>
                                </div>
                                <div className="info__card-wrapper info__card-wrapper-right empty">
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default InventoryItemDetails;