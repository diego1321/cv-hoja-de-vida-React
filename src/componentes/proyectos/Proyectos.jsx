import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Proyecto from './Proyecto';
import { Grid } from '@mui/material';

const proyectos = [{
  nombre:"repogit",
  descripcion:"repositorio de ejemplo para curso de git",
  link:"https://github.com/diego1321/repogit",
},
{
  nombre:"ejercicio de herencia javascript",
  descripcion:"ejercicio practico de herencia entre componentes",
  link:"https://github.com/diego1321/ejercicio-de-herencia-javascript"
},
{
  nombre:"proyecto sistema de ventas javascript",
  descripcion:"ejercicio de sistema de ventas hecho con javascript",
  link:"https://github.com/diego1321/proyecto-sistema-de-ventas-javascript"
},
{
  nombre:"ejercicios javascript",
  descripcion:"ejercicios de practica con javascript",
  link:"https://github.com/diego1321/ejercicios-javascript"
},
{
  nombre:"cv digital html",
  descripcion:"hoja de vida o CV hecho en html",
  link:"https://github.com/diego1321/cv-digital-html"
},
{
  nombre:"curso basico html",
  descripcion:"fundamentos basicos de html",
  link:"https://github.com/diego1321/curso-basico-HTML"
},
{
  nombre:"ejemplo buscador local react",
  descripcion:"pequeño buscador con base de datos hecho en react",
  link:"https://github.com/diego1321/Ejemplo-buscador-local-react"
},
{
  nombre:"cv hoja de vida react",
  descripcion:"hoja de vida o CV hecha en react",
  link:"https://github.com/diego1321/cv-hoja-de-vida-React"
}];

export default function Proyectos() {
  return (
    <Card sx={{ margin: "20px" }} elevation={6} >
      <CardContent>
        <Typography variant="h5" component="div">
          Proyectos
        </Typography>
          <Typography variant="body2">
            <Grid container spacing={2}>  
            {proyectos.map((proyecto,indice)=><Grid key={`grid-proyecto-${indice}`} item xs={4}><Proyecto nombreproyecto={proyecto.nombre} descripcion={proyecto.descripcion} link={proyecto.link}/></Grid>)}
            </Grid>
          </Typography>
      </CardContent>
    </Card>
  );
}
