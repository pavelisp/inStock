import './Header.scss';
import Logo from '../../assets/logo/InStock-Logo.svg';
import { Link, NavLink } from 'react-router-dom';



export default function Header() {
    return(
        <div className='header__container'>
            <div className='header__logo'>
                <img className='header__img' src={Logo} alt='Logo'/>
            </div>
            <div className='subheader'>
                <div className='subheader__warehouse'>
                    <NavLink className='Nav__btn' to='/'> <h2 className='subheader__warehouse-title'>Warehouse</h2> </NavLink>
                </div>
                <div className='subheader__inventory'>
                   <NavLink className='Nav__btn' to='/inventory'> <h2 className='subheader__inventory-title'>Inventory</h2> </NavLink>
                </div>
            </div>

        </div>

    );
}
