import * as React from "react";
import {Helmet} from 'react-helmet-async';
import {Button, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCars} from "../api/carApi";
import ThemeProvider from "../theme";

const ListOfCars = () => {

    // const navigate = useNavigate();

    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars()
            .then(response=> setCars(response))
    }, [] )

    const carList = (
        cars.map((cars, i) => (
            <TableRow key={i}>
                <TableCell>{cars.make}</TableCell>
                <TableCell>{cars.model}</TableCell>
                <TableCell>{cars.yearOfMade}</TableCell>
                <TableCell>{cars.bodyType}</TableCell>
                <TableCell>{cars.fuelType}</TableCell>
                <TableCell>{cars.licencePlate}</TableCell>
                <TableCell>
                    <Button variant="contained">
                        Preview
                    </Button>
                </TableCell>
            </TableRow>
        ))
    )

    return (
        <>
            <Helmet>
                <title> Dashboard: Cars</title>
            </Helmet>

            <Button variant="outlined" color="primary">Add+</Button>
            <hr/>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Gamintojas</TableCell>
                        <TableCell>Modelis</TableCell>
                        <TableCell>Pagaminimo metai</TableCell>
                        <TableCell>Kėbulo tipas</TableCell>
                        <TableCell>Kuro tipas</TableCell>
                        <TableCell>Valstybinis numeris</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>

                <TableBody>
                    {carList}
                </TableBody>

            </Table>
        </>
    );
}

export default ListOfCars
