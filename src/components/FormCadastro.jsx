import React from 'react';
import Formulario from './Formulario'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Divider } from '@material-ui/core/';

import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    textAlign: 'center',

  },
}));

export default function Cadastro() {
  const classes = useStyles();


  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader title="Cadastro" className={classes.title} />
      <Divider />
      <CardContent>
        <Formulario />
      </CardContent>
    </Card>
  );
}
