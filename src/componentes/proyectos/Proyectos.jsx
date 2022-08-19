import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Proyectos() {
    return (
      <Card sx={{ margin: "20px" }} elevation={6} >
        <CardContent>
          <Typography variant="h5" component="div">
            Proyectos
          </Typography>
          <Typography variant="body2">
            aqui van los proyectos
          </Typography>
        </CardContent>
      </Card>
    );
  }
