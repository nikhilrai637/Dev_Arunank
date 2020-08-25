import React from 'react';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import  {useStyles} from './Styles'

const CARD =({domain}) =>{
 
console.log(domain)
  const classes =  useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return(

   <Link href="#">
    <Card raised="true" className={classes.root}>
      <CardMedia className={classes.media} style={{height: "60px"}}   image  =  {require(`./IMAGES/${domain}.jpg`)}/>
  </Card>
  </Link>

  );
};
export default CARD;