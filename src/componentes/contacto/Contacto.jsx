import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Contacto() {
    return (
      <Card sx={{ margin:"20px"}} elevation={6} >
        <CardContent>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <Typography variant="h5" component="div">
            Contacto
          </Typography>
          <TextField id="filled-basic" label="Nombre" variant="filled" />
          <TextField id="filled-basic" label="Apellido" variant="filled" />
          <TextField id="filled-basic" label="Email" variant="filled" />
          <TextField id="filled-basic" label="Asunto" variant="filled" />
          <TextField id="filled-basic" label="Mensaje" variant="filled" />
         </Box>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" ><SendIcon/></Button>
        </CardActions>
      </Card>
    );
  }
  