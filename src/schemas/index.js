import * as yup from "yup"

const formSchema = yup.object().shape({
    make: yup.string().min(1).max(25).required("Required"),
    model: yup.string().min(1).max(25).required("Required"),
    yearOfMade: yup.number().positive().integer().required("Required"),
    bodyType: yup.string().required("Required"),
    fuelType: yup.string().required("Required"),
    licencePlate: yup.string().min(1).max(15).required("Required"),
})
export default formSchema