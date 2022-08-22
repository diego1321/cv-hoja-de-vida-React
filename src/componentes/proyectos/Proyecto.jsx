import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

export default function Proyecto({nombreproyecto, descripcion, link}) {
   return (
      <Card sx={{ margin: "20px" }} elevation={6} >
        <CardContent>
          <Typography variant="h5" component="div">
            {nombreproyecto}
          </Typography>
          <Typography variant="body2">
            {descripcion} 
          </Typography>
        </CardContent>
        <CardActions> 
         <a rel='noreferrer' target={"_blank"} href={link}><Button variant='contained'>{nombreproyecto}</Button></a>
        </CardActions>
      </Card>
  );
}