import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

 
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import { Divider } from '@material-ui/core';
import {useStyles} from './Styles'

const Navbar =() =>{
    const classes= useStyles();
    return (
        <AppBar position="static" color="transparent">
            <Toolbar>
                <Typography color="primary" variant="h4" className={classes.font} >
                   cache
                </Typography>
                <MenuItem className={classes.typographyStyles}><Link href="#" color="inherit">
                    <strong>Contact Us</strong>
                    </Link>
                </MenuItem>

                <Divider orientation="vertical" />
                
                 <MenuItem ><Link href="#" color="inherit">
                     <strong>Sign Up</strong>
                 </Link>
                </MenuItem>
               
             </Toolbar>
      </AppBar>

    );

};
 export default Navbar;