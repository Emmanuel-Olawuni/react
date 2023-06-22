import '../input/form-input.styles.scss'
const InputFields = ({ label, ...OtherProps }) => {
    return (
        <div className='group'> 

            <input className='form-input' {...OtherProps} />
            <label for="" className={`${OtherProps.value.length ? 'shrink' : ''} form-input-label` }>{label}</label>

        </div>
    )
}
export default InputFields