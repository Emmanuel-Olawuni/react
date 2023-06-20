import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import '../navigations/navigations.styles.scss'
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

const NavBar = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>

                <div>
                    < CrownLogo className="logo"/>
                </div>
                </Link>
                <div className="links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                  
                    <Link className="nav-link" to='/signIn'>
                        SIGN IN
                    </Link>
                    
                </div>
            </div>
            <Outlet />
        </Fragment>
    )

}

export default NavBar