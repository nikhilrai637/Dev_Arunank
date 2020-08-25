

import React from 'react';
import Typography from '@material-ui/core/Typography';
 
import {Grid} from "@material-ui/core";
import Link from '@material-ui/core/Link';


  const Content =() =>{
    
  
    return (
 
        
      <Grid container>
      <Grid item xs={2} md={2} sm={2} />
    
       <Grid item xs={4} md={3} sm={4} justify="center" alignItems="center" >
    
     <Typography><h2><Link color="inherit">About</Link></h2></Typography>
     <Typography><h2><Link color="inherit">Contact</Link></h2></Typography>
     <Typography><h2><Link color="inherit">Team</Link></h2></Typography>
     
    
  
    </Grid>
    <Grid item  justify="center" alignItems="center" xs={6} md={3} sm={2}>
    
   

    <Typography><h2><Link color="inherit">Accessibility</Link></h2></Typography>
    <Typography><h2><Link color="inherit">Terms of Use</Link></h2></Typography>
    <Typography><h2><Link color="inherit">Privacy</Link></h2></Typography>
  
    </Grid>
    <Grid item xs={2} md={1} sm={1} />
    
    <Grid item  xs={6} md={2} sm={2} justify="flex-end" alignItems="flex-end">
  
    <Typography><h2><Link color="inherit">Blog</Link></h2></Typography>
    <Typography><h2><Link color="inherit">Career</Link></h2></Typography>
    <Typography><h2><Link color="inherit">Resources</Link></h2></Typography>

    
      
    </Grid>
  
  </Grid>
       

        );
    };
     export default Content;
