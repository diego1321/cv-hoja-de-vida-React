import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader } from '@mui/material';


export default function ActionAreaCard() {
  return (
    <Card sx={{ margin:"20px"}} elevation={6}     >
        <CardContent>
            <CardHeader avatar={<Avatar src="foto-cv.jpeg"/>}/>
            <Typography gutterBottom variant="h5" component="div">
           03 de Diciembre del 2003. Fusagasuga, Colombia.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Soy un programador novato que esta empezando con sus primeros proyectos y le gusta investigar. Estoy buscando mi primera experiencia como programador y la idea es estudiar algo relacionado a programación o sistemas.
          </Typography>
        </CardContent>
    </Card>
  );
}