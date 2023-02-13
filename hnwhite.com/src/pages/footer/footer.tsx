import * as React from 'react';
import { Typography } from '@mui/material';
var logo = require('./img/www.hnwhite.com_maintained_by_logo.gif');

function apples() {
    return 0
}

export default function FooterContent() {
    return (
        <React.Fragment>
            <center>
            <img src={logo} height={'175px'}></img>
            </center>
            <Typography align='center' fontSize={15}>
            Ⓒ2022-2023 The Hnwhite Company 
            </Typography>
            <Typography align='center' fontSize={15}>
            Built with love by the Family 
            </Typography>
        </React.Fragment>

    );

}