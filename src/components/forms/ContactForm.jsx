import { useFormik } from 'formik';
import './contactForm.css';
import { validateContact } from '../../utils/validate';
import { sendEmail } from '../../utils/sendEmail';
import { useState } from 'react';
import Modal from '../modals/Modal.astro';

const ContactForm = ({serviceId,templateId,userId})=>{
    const [alert, setAlert] = useState('')

    const formik = useFormik({
        initialValues:{
            name:'',
            phone:'',
            email:'',
            message:''
        },
        validationSchema:validateContact,
        onSubmit: async (values)=>{
            const res = await sendEmail(values,serviceId,templateId,userId)
            if(res === 'ok'){
                setAlert('¡Se envió su consulta 😎, en un momento estaremos en contacto!')
                return
            }
            setAlert('Ocurrió un problema 🤦‍♂️')
        }
    })

    return(
        <>
            {alert && <Modal message={alert} />}
            <form 
                onSubmit={formik.handleSubmit}
                className='contact_form'
            >
                <label htmlFor="name">NOMBRE Y APELLIDO</label>
                <input
                    type="text" 
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='box_contact_errors' >
                    {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
                </div>

                <label htmlFor="phone">TELÉFONO</label>
                <input
                    type="text" 
                    id="phone" 
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='box_contact_errors' >
                    {formik.touched.phone && formik.errors.phone && <p>{formik.errors.phone}</p>}
                </div>

                <label htmlFor="email">EMAIL</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='box_contact_errors' >
                    {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                </div>

                <label htmlFor="message">CONSULTA</label>
                <textarea
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <div className='box_contact_errors' >
                    {formik.touched.message && formik.errors.message && <p>{formik.errors.message}</p>}
                </div>

                <div className="box_button_submit" >
                    <button type="submit" >
                        ENVIAR
                    </button>
                </div>
            </form>
        </>
    )
}

export default ContactForm