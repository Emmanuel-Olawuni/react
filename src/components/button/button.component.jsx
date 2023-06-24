/*
there are 3 ttypes of button

*/
import '../button/button.styles.scss'
const BUTTON_TYPES_CLASS =  {
    google: 'google-sign-in', 
    inverted: 'inverted',
}
const Button = ({children , buttonType , ...otherProps}) => {
    return(
        <div>
            <button className={`button-container ${BUTTON_TYPES_CLASS[buttonType]}`} {...otherProps}>
                {children}
            </button>
        </div>
    )
}
export default Button