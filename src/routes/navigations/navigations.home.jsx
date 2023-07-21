import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "../navigations/navigations.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const NavBar = () => {
  const { CurrentUser, setCurrentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)
  const SignOutHandler = async () => {
    await SignOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo className="logo" />
          </div>
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {CurrentUser ? (
            <Link className="nav-link" onClick={SignOutHandler}>
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        
       {isCartOpen &&  <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
