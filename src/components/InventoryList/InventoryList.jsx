import './InventoryList.scss';
import SearchImg from '../../assets/Icons/search-24px.svg';
import React from 'react';
import InventoryCard from '../InventoryCard/InventoryCard';
import SortIcon from '../../assets/Icons/sort-24px.svg';


export default class InventoryList extends React.Component  {


    render() {
        console.log(this.props.inventory)
        return(
            <>
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
            <div className='inventoryCardtableandDesktop__Header'>
                   <h4 className='inventoryCardtableandDesktop__title'>INVENTORY ITEM<img className='sortingimg' src={SortIcon} alt='sorting icon'></img></h4>
                   <h4 className='inventoryCardtableandDesktop__title'>CATEGORY<img className='sortingimg' src={SortIcon} alt='sorting icon'></img></h4>
                   <h4 className='inventoryCardtableandDesktop__title'>STATUS<img className='sortingimg' src={SortIcon} alt='sorting icon'></img></h4>
                   <h4 className='inventoryCardtableandDesktop__title'>QTY<img className='sortingimg' src={SortIcon} alt='sorting icon'></img></h4>
                   <h4 className='inventoryCardtableandDesktop__title'>WAREHOUSE<img className='sortingimg' src={SortIcon} alt='sorting icon'></img></h4>
                   <h4 className='inventoryCardtableandDesktop__title'>ACTIONS</h4>
                </div>
            <ul>
               {this.props.inventory.map(inventorycard =>{
                   return(
                    <InventoryCard
                    itemName={inventorycard.itemName}
                    category={inventorycard.category}
                    status={inventorycard.status}
                    quantity={inventorycard.quantity}
                    warehouseName={inventorycard.warehouseName}
                    

                    />


                   )
               })}
            </ul>
            </>
        )
    }
}

