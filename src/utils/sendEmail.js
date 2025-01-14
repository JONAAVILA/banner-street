import emailjs from 'emailjs-com'

export async function sendEmail(values,serviceId,templateId,userId) {
    const templateParams = {
        from_name: `👋 ${values.name}`,
        from_email: values.email,
        message: `Consulta : ${values.message} y mi teléfono es ${values.phone}`
    }
    
    try {
        const res = await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            userId
        )
        return res.data
    } catch (error) {
        return error.message
    }
}