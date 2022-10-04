import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';

export default function Links() {
    return (
      <Card sx={{ margin:"20px"}} elevation={6} >
        <CardContent>
          <Typography variant="h5" component="div">
          Puedes encontrarme en . . .
          </Typography>
          <Box sx={{display:"flex"}}>
          <Box sx={{margin:"2px"}} >
          <a href="https://github.com/diego1321" target="blank"><GitHubIcon color='primary'/></a>
          </Box>
          <Box sx={{margin:"2px"}}>
          <a href='https://www.linkedin.com/in/diego-alejandro-prieto-96244a251/' target="blank"><LinkedInIcon color='primary'/></a>
          </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }