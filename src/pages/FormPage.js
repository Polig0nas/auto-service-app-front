import * as React from "react";
import {Helmet} from 'react-helmet-async';
import {Button, Container, Stack, Typography} from '@mui/material';
import Iconify from '../components/iconify';
import {Field, Form, Formik} from "formik";
import Label from "../components/label";
import formSchema from "../schemas";

export default function FormPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Form</title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
           Form
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button>
        </Stack>
      </Container>
        <>
            <Formik
                initialValues={{
                    make: '',
                    model: '',
                    yearOfMade: '',
                    bodyType: '',
                    fuelType: '',
                    licencePlate: '',
                }}
                validationSchema={formSchema}

                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Label htmlFor="make">Make</Label> <br/>
                    <Field id="make"
                           name="make"
                           placeholder="Make"
                           />
                    <br/>

                    <Label htmlFor="model">Model</Label><br/>
                    <Field id="model"
                           name="model"
                           placeholder="Model"/>
                    <br/>

                    <Label htmlFor="yearOfMade">Year</Label><br/>
                    <Field id="yearOfMade"
                           name="yearOfMade"
                           placeholder="Year"/>
                    <br/>

                    <Label htmlFor="bodyType">Body</Label><br/>
                    <Field id="bodyType"
                           name="bodyType"
                           placeholder="Body"/>
                    <br/>

                    <Label htmlFor="fuelType">Fuel</Label><br/>
                    <Field id="fuelType"
                           name="fuelType"
                           placeholder="Fuel"/>
                    <br/>

                    <Label htmlFor="licencePlate">Licence Plate</Label><br/>
                    <Field id="licencePlate"
                           name="licencePlate"
                           placeholder="Number"/>
                    <br/>

                    <Button type="submit">Submit</Button>
                </Form>
            </Formik>
        </>
    </>
  );
}
