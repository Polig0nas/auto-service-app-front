const CarForm = () => {
    return(
        <>
            <form>
                <h2>Car</h2>
                <div>
                    <label htmlFor="licensePlate">Licence Plate</label>
                    <br/>
                    <input id="licensePlate"
                           name="licensePlate"
                           placeholder="Licence Plate Number"
                    />
                </div>
                <br/>
                <div>
                    <label htmlFor="make">Make</label>
                    <br/>
                    <input id="make"
                           name="make"
                           placeholder="Make"
                    />
                </div>
                <br/>
                <div>
                    <label htmlFor="model">Model</label>
                    <br/>
                    <input id="model"
                           name="model"
                           placeholder="Model"
                    />
                </div>
                <br/>
                <div>
                    <label htmlFor="yearOfMade">Year Of Made</label>
                    <br/>
                    <input id="yearOfMade"
                           name="yearOfMade"
                           placeholder="Year Of Made"
                    />
                </div>
                <br/>
                <div>
                    <label htmlFor="bodyType">Body Type</label>
                    <br/>
                    <select name="bodyType">
                        <option selected="selected" value="sedan">Sedan</option>
                        <option value="wagon">Wagon</option>
                    </select>
                </div>
                <br/>
                <div>
                    <label htmlFor="fuelType">Fuel Type</label>
                    <br/>
                    <select name="fuelType">
                        <option selected="selected" value="diesel">Diesel</option>
                        <option value="gasoline">Gasoline</option>
                    </select>
                </div>
                <button type="submit" className="btnAdd">Add</button>
            </form>

        </>
    )
}
export default CarForm