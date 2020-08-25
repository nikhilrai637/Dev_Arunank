import { makeStyles } from '@material-ui/core/styles';
import img from './art.png';

export const useStyles = makeStyles((theme) => ({

    headstyles:{
        textAlign:"center",

    },

    textcolor:{
        fontWeight:"700",
        fontSize: "20px",
        color: "white",
        marginTop: "2rem",
        marginBottom:"3rem",
      

    },
    image: {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
         height:"25vh",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      },
    

 

     
    }));
