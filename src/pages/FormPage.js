import * as React from "react";
import {Helmet} from 'react-helmet-async';
import {Button, MenuItem, Select, TextField} from '@mui/material';
import {Field, Form, Formik} from "formik";
import Label from "../components/label";
import formSchema from "../schemas";
import {addCar} from "../api/carApi";
import {useNavigate} from "react-router-dom";

const FormPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title> Dashboard: Form</title>
            </Helmet>

            <div align="center">
                <Formik
                    initialValues={{
                        make: '',
                        model: '',
                        yearOfMade: '',
                        bodyType: '',
                        fuelType: '',
                        licencePlate: ''
                    }}
                    validationSchema={formSchema}

                    onSubmit={async (values) => {
                        try {
                            await addCar(values);
                            navigate("/dashboard/listOfCars");
                        } catch (error) {
                            console.error(error);
                        }
                    }}>
                    {(props) => {
                        return (
                            <Form onSubmit={props.handleSubmit}>
                                <Label htmlFor="make">Make</Label> <br/>
                                <Field id="make"
                                       type="text"
                                       name="make"
                                       placeholder="Make"
                                       // value={props.values.make}
                                       // onChange={props.handleChange}
                                       error={!!props.errors.make && props.touched.make}
                                       helperText={props.touched.make && props.errors["make"]}
                                       as={TextField}
                                />
                                <br/>

                                <Label htmlFor="model">Model</Label><br/>
                                <Field id="model"
                                       type="text"
                                       name="model"
                                       placeholder="Model"
                                       // value={props.values.model}
                                       // onChange={props.handleChange}
                                       error={!!props.errors.model && props.touched.model}
                                       helperText={props.touched.model && props.errors["model"]}
                                       as={TextField}/>
                                <br/>

                                <Label htmlFor="yearOfMade">Year</Label><br/>
                                <Field id="yearOfMade"
                                       name="yearOfMade"
                                       placeholder="Year"
                                       // value={props.values.yearOfMade}
                                       // onChange={props.handleChange}
                                       error={!!props.errors.yearOfMade && props.touched.yearOfMade}
                                       helperText={props.touched.yearOfMade && props.errors["yearOfMade"]}
                                       as={TextField}/>
                                <br/>
                                <Label htmlFor="bodyType">Body</Label><br/>
                                <Field id="bodyType"
                                       name="bodyType"
                                       placeholder="Body"
                                       // value={props.values.bodyType}
                                       // onChange={props.handleChange}
                                       error={!!props.errors.bodyType && props.touched.bodyType}
                                       helperText={props.touched.bodyType && props.errors["bodyType"]}
                                       as={Select}
                                >
                                    <MenuItem value="sedan">Sedan</MenuItem>
                                    <MenuItem value="wagon">Wagon</MenuItem>
                                </Field><br/>
                                <Label htmlFor="fuelType">Fuel</Label><br/>
                                <Field id="fuelType"
                                       name="fuelType"
                                       placeholder="Fuel"
                                       // value={props.values.fuelType}
                                       // onChange={props.handleChange}
                                       error={!!props.errors.fuelType && props.touched.fuelType}
                                       helperText={props.touched.fuelType && props.errors["fuelType"]}
                                       as={Select}
                                >
                                    <MenuItem value="gasoline">Gasoline</MenuItem>
                                    <MenuItem value="diesel">Diesel</MenuItem>
                                </Field>
                                <br/>

                                <Label>Licence Plate</Label><br/>
                                <Field id="licencePlate"
                                       type="text"
                                       name="licencePlate"
                                       placeholder="Number"
                                       // value={props.values.licencePlate}
                                       // onChange={props.handleChange}
                                       error={!!props.errors.licencePlate && props.touched.licencePlate}
                                       helperText={props.touched.licencePlate && props.errors["licencePlate"]}
                                       as={TextField}/>
                                <br/><br/>
                                <Button variant="contained"
                                        type="submit"
                                        onClick={() => {props.submitForm()
                                        }}>
                                    Submit
                                </Button>
                                <br/><br/>
                                <Button
                                    variant="contained"
                                    onClick={() => navigate("/dashboard/listOfCars")}
                                >Cancel
                                </Button>
                            </Form>
                        )
                    }
                    }
                </Formik>
            </div>
        </>
    );
}
export default FormPage;