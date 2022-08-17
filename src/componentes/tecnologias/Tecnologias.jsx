import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Tecnologias() {
    return (
      <Card sx={{ margin: "20px" }} elevation={6}>
        <CardContent>
          <Typography variant="h5" component="div">
            Tecnologias
          </Typography>
          <Typography variant="body2" >
            <HtmlIcon fontSize='large' sx={{ margin: "25px"}} />
            <CssIcon fontSize='large' sx={{ margin: "25px"}}/>
            <JavascriptIcon fontSize='large' sx={{ margin: "25px"}}/>
            <GitHubIcon fontSize='large' sx={{ margin: "25px"}}/>
          </Typography>
        </CardContent>
      </Card>
    );
  }
  