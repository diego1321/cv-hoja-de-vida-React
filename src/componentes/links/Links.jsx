import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Links() {
    return (
      <Card sx={{ margin:"20px"}} elevation={6} >
        <CardContent>
          <Typography variant="h5" component="div">
          Puedes encontrarme en . . .
          </Typography>
          <a href="https://github.com/diego1321" target="blank"><GitHubIcon/></a>
        </CardContent>
      </Card>
    );
  }