import './Header.scss';
import Logo1x from '../../assets/logo/InStock-Logo_1x.png';
import Logo2x from '../../assets/logo/InStock-Logo_2x.png';


export default function Header() {
    return(
        <div className='header__container'>
            <div className='header__logo'>
                <img className='header__img' src={Logo1x} alt='Logo'/>
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
