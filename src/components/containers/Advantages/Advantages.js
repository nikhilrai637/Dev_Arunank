import React from 'react'
import {Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import {Data}        from './data' 
import {useStyles} from './Styles'
import EVEN_CARD from '../../presentational/EVEN_CARD/EVEN_CARD'
import ODD_CARD from '../../presentational/ODD_CARD/ODD_CARD'

function Advantages() {
    const classes = useStyles();
    return (
        <div>
             <Grid container justify="center">
                  <Grid item xs={12} sm={8} style={{textAlign:"center"}}>
                      <Typography>
                          <Divider />
                            <h1 className={classes.heading}>What's there for you</h1>
                      </Typography>
                  </Grid>
              </Grid>

              <Grid direction="column">
                  {Data.map(data =>{
                      return(
                        data.parity === 0 ? <EVEN_CARD Name={data.Name} Head = {data.Head} Text = {data.Text} /> 
                                          : <ODD_CARD  Name={data.Name} Head = {data.Head} Text = {data.Text}/> 
                      )
                  })}    
        </Grid>
            
        </div>
    )
}

export default Advantages;
