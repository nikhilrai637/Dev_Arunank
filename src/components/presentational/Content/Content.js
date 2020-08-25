import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    headstyles:{
        textAlign:"center",
        marginTop:"8rem",

    },
    styles:{
        fontSize: "23px",
        fontWeight: "500",
       

    },

    textcolor:{
        color: "white",
        marginTop: "40px",

    },
   
    }));

  const Content =() =>{
    const classes = useStyles();
  
    return (
        

             <Grid item container>
            <Grid item xs={2} />
               <Grid item xs={8}>
                   <Typography>
                   <h1 className={classes.headstyles}>Set your job preparation on the right track</h1>
                  </Typography>
  
              </Grid>
              <Grid container justify="center">
                  <Grid item xs={8} sm={4} style={{textAlign:"center"}}>
                      <Typography>
                         <h4 className={classes.styles}> Cracking an interview is tough.
                         We at Cache Prep help you crack it with clarity,convenience and confidence.</h4>
                      </Typography>
                  </Grid>
              </Grid>
             
                <Grid item xs={2} />

            </Grid>

       

        );
    };
     export default Content;
