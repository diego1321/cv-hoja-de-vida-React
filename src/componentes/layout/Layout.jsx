import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import DatosPersonales from "../datos-personales/DatosPersonales";
import Proyectos from '../proyectos/Proyectos';

export default function Layout({mode,setMode}) {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Diego Alejando Prieto
            </Typography>
             <LightModeIcon />
            <Switch onChange={() => setMode(mode === "oscuro" ? "claro": "oscuro")} {...label} />
            <Brightness3Icon/>
          </Toolbar>
        </AppBar>
        <DatosPersonales/>
        <Proyectos/>
      </Box>
    );
  }
  