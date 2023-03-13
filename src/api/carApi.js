import HTTP from "./index"

const getCars = () => HTTP.get("/allcars")
    .then(response => response.data)

export {getCars}