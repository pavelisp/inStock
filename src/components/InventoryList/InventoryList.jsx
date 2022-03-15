import './InventoryList.scss';
import SearchImg from '../../assets/icons/search-24px.svg';
import React from 'react';

export default class InventoryList extends React.Component  {


    render() {
        return(
            <div className='inventorylist'>
                <header className='inventorylist__header'>
                    <h2 className='inventorylist__title'>Inventory</h2>
                    <form className='inventorylist__search'>
                        <img className='inventorylist__search-img' src={SearchImg} alt='magnifying icon' />
                        <input className='inventorylist__search-title' type='text' placeholder='Search...'/>                  
                    </form>
                    <p className='inventorylist__search-add'>+Add New Item</p>
                </header>

            </div>
        )
    }
}

