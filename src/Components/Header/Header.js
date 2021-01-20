import React from 'react';
import './Header.css';
import logo from '../Header/logo/amazon_PNG25.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context/context';
import { auth } from '../../firebase';

function Header(props) {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">

            {/* <div className="toogleHide">
                <MenuIcon className="header__menue" onClick={props.toggle} />
            </div> */}
            <Link to="/">
                <img className="header__logo" src={logo} />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>


            <Link to={!user && '/login'}>
                <div classNam="header__nav">
                    <div onClick={handleAuth} className="header__child">
                        <span className="header__childFirst">
                            {user ? 'Hello Geek!' : 'Hello'}
                        </span>
                        <span className="header__childSecond">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </div>
            </Link>


            <div classNam="header__nav">
                <div className="header__child">
                    <span className="header__childFirst">
                        Return
                    </span>
                    <span className="header__childSecond">
                        &Orders
                    </span>
                </div>
            </div>
            <div classNam="header__nav">
                <div className="header__child">
                    <span className="header__childFirst">
                        Your
                    </span>
                    <span className="header__childSecond">
                        Prime
                    </span>
                </div>
            </div>
            <Link to="/checkout">
                <div classNam="header__nav">
                    <div className="header__childOrderBasket">
                        <ShoppingBasketIcon />
                        <span className="header__childSecond header__count">{basket?.length}</span>
                    </div>
                </div>
            </Link>

        </div>
    )
}



export default Header
