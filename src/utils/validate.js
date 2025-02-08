import * as Yup from 'yup';

export const validateContact = Yup.object().shape({
    name:Yup.string()
        .min(3,"Nombre muy corto")
        .max(50,'Nombre muy largo')
        .matches(/^[a-zA-Z ]+$/,'Formato inválido')
        .required('El nombre es requerido'),
    phone:Yup.string()
        .min(3,'Inválido')
        .max(20,'Inválido')
        .matches(/^[0-9+\- /]+$/, 'Inválido')
        .required('Requrido'),
    email:Yup.string()
        .email('Email invalido')
        .required('El email es requerido'),
    message:Yup.string()
        .min(5, 'Mesaje muy corto')
        .max(200, 'Demasiado largo')
        .matches(/^[a-zA-Z0-9 ]+$/,'Inválido')
        .required('El mensaje es requerido'),
})  