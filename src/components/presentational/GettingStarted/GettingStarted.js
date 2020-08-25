import React from 'react';
import Button from '@material-ui/core/Button';
import {Grid} from "@material-ui/core";
import {useStyles} from './Styles'
 
  const GettingStarted =() =>{
    const classes = useStyles();
  
    return (
         <Grid  container>
             <Grid item xs={2} />
               <Grid item xs={8}>
                 <Grid container justify="center">
                  <Grid item xs={12} style={{textAlign:"center"}}>
                      <Button variant="contained" color="secondary" className={classes.textcolor} href="/Get_Start">
                           GET STARTED
                         </Button>
                  </Grid>
              </Grid>
                <Grid item xs={2} />

            </Grid>

            <Grid  item xs={12} md={12} sm={12} className={classes.image}>

            </Grid>
            </Grid>

       

        );
    };
     export default GettingStarted;