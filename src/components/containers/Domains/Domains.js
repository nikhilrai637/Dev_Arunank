import React from 'react'
import {Data} from './data'
 
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import CARD from '../../presentational/CARD/CARD'

const useStyles = makeStyles(() => ({
  heading:{
     marginBottom:"100px",
  },
  }));

function Domains() {

  const classes = useStyles();
    return (

      
        <div className={classes.heading}>
            <Grid container justify="center">
                  <Grid item xs={12} sm={8} style={{textAlign:"center"}}>
                      <Typography>
                        <Divider />
                       <h1 style={{paddingBottom:"60px"}}>Choose your domain and start preparing</h1>
                      </Typography>
                  </Grid>
              </Grid>

     <Grid container>
      <Grid item sm={2} xs={2} />
      <Grid item  container xs={10} sm={8} spacing={10}>
          
          {Data.map( (data,key) => {
            console.log(data.domain)
            return (
              <Grid item xs={12} sm={6} md={4} >
              <CARD domain = {data.domain}/>
            </Grid> 
            );
          } )}
         
          
      </Grid>
      <Grid item sm={2} xs={2} />
      </Grid>
       
           
        </div>
    )
}

export default Domains
