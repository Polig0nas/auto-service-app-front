import {useState} from 'react'
import {alpha} from '@mui/material/styles';
import {Box, IconButton, MenuItem, Popover, Select, Stack} from '@mui/material';
import {changeLanguage} from "i18next";
import {i18n} from "../../../i18n";
import {useTranslation} from "react-i18next";

export default function LanguagePopover() {

const changeLang = (event) => {
  i18n.changeLanguage()
}

    return(
        <>
        <Box>
            <MenuItem value="en" >English</MenuItem>
            <MenuItem value="lt" >Lietuvių</MenuItem>
        </Box>
        </>
    )
}

