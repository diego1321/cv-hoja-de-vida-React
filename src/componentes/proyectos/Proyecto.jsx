import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

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
         <a rel='noreferrer' target={"_blank"} href={link}><IconButton color="primary" aria-label="upload picture" component="label"><GitHubIcon/></IconButton></a>
        </CardActions>
      </Card>
  );
}