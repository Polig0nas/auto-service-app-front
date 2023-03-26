import * as yup from "yup"

const formSchema = yup.object().shape({
    make: yup.string().min(1).max(25).required("Required"),
    model: yup.string().min(1).max(25).required("Required"),
    yearOfMade: yup.number().positive().integer("Only numbers").min(1950).max(2023).required("Required"),
    bodyType: yup.string().oneOf(["sedan","wagon"]).required("Required"),
    fuelType: yup.string().oneOf(["gasoline","diesel"]).required("Required"),
    licencePlate: yup.string().min(1).max(15).required("Required"),
})
export default formSchema