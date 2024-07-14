import * as yup from "yup";

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").min(10, "Min 10 characters").required("Required"),
    address1: yup.string().required("Required"),
    address2: yup.string().required("Required"),
})

export const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}
