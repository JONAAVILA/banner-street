import Close from '../../icons/close/Close'
import './modal.css'

const Modal = ({children,handleModal})=>{
    return(
        <div className='modal_container' >
            <div onClick={handleModal} >
                <Close/>
            </div>
            <p>{children}</p>
        </div>
    )
}

export default Modal