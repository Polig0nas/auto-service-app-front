import HTTP from "./index"

//http://localhost:8080//allcars
const getCars = () => HTTP.get("/allcars")
    .then(response => response.data)

//http://localhost:8080/new
const addCar = (car) => HTTP.post("/new", car)

export {getCars, addCar}