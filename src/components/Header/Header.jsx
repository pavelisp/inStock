import './Header.scss';
import Logo from '../../assets/logo/InStock-Logo.svg';



export default function Header() {
    return(
        <div className='header__container'>
            <div className='header__logo'>
                <img className='header__img' src={Logo} alt='Logo'/>
            </div>
            <div className='subheader'>
                <div className='subheader__warehouse'>
                    <h2 className='subheader__warehouse-title'>Warehouse</h2>
                </div>
                <div className='subheader__inventory'>
                    <h2 className='subheader__inventory-title'>Inventory</h2>
                </div>
            </div>

        </div>

    );
}
