import * as React from "react";
import {useEffect, useState} from "react";
import {Helmet} from 'react-helmet-async';
import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {getCars} from "../api/carApi";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const ListOfCars = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars()
            .then(response => setCars(response))
    }, [])

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
                    <Button variant="contained" disabled>
                        Done
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

            <div style={{marginTop: "10px", textAlign: "left"}}>
                <Button variant="outlined" onClick={() => navigate("/dashboard/form")}>
                    Add+
                </Button>
            </div>
            <hr/>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>{t('tMake')}</TableCell>
                        <TableCell>{t('tModel')}</TableCell>
                        <TableCell>{t('tYear')}</TableCell>
                        <TableCell>{t('tBody')}</TableCell>
                        <TableCell>{t('tFuel')}</TableCell>
                        <TableCell>{t('tNumber')}</TableCell>
                        <TableCell/>
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
