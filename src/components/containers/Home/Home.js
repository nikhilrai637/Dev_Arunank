import React from 'react'
import Navbar from '../../presentational/Navbar/Navbar'
import About from '../../presentational/About/About'
import Footer from '../../presentational/Footer/Footer'
import Advantages from '../Advantages/Advantages'
import Hero from '../Hero/Hero'
import Domains from '../Domains/Domains'
import img2 from './wavecrop.png';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";
 

const useStyles = makeStyles(() => ({


    image: {
        backgroundImage: `url(${img2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        
      },
   
    }));






function Home() {

    const classes = useStyles();
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Domains/>
              <Grid item  md={12} xs={12} sm={12} className={classes.image}>
                    <Advantages />
                    <About/>
              </Grid>
            <Footer/>
            
           
        </div>
    )
}

export default Home
