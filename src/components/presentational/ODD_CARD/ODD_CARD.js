import React from 'react'
import {Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import {useStyles} from './Styles'
 

function ODD_CARD({Name,Head,Text}) {
    
    const classes = useStyles();
    return (
        <div>
            <Grid item container>
            <Grid item container>
                <Grid container  >
                <Grid item xs={3} sm={2} />
                <Grid item container xs={8} sm={4} justify="flex-end" alignItems="center">
                <Typography>
                        <h1>{Head}</h1>
                        <h3>{Text}</h3>
                    </Typography>
              
                </Grid>

                <Grid item xs={2} sm={1} />
                <Grid item  xs={8} sm={3}  justify="flex-start" alignItems="flex-start">
                <Link href="#">
    <Card className={classes.root} raised="true">
           {}
      <CardMedia className={classes.media} style={{height: "180px"}}   image= {require(`./IMAGE/${Name}.jpeg`)} />
        
  </Card>
  </Link>     
                 </Grid>
             
               </Grid>

            </Grid>
                
            </Grid>
        </div>
    )
}

export default ODD_CARD
