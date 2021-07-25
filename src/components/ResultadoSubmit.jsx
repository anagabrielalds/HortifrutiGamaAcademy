import React, { useState } from 'react';
import Formulario from './Formulario'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, Button } from '@material-ui/core/';
import { Link } from "react-router-dom";
import CardHeader from '@material-ui/core/CardHeader';




const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        backgroundColor: '#335f08',
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'

    },
    root1: {
        minWidth: 275,
        backgroundColor: '#000',
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'

    },
    title: {
        textAlign: 'center',

    },
    field: {
        '&.MuiTextField-root': {
            margin: '1000px',
            width: 400,
        },
        margin: '50px',
        backgroundColor: 'violet',
    },
    largeImg: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginTop: '3rem'
    },
    button: {
        backgroundColor: '#c9f8a6',
        textAlign: 'center',
        width: '25rem',
        marginTop: '3rem'
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },


}));

export default function ResultadoSubmit() {
    const classes = useStyles();
    const dadosPedidoCompleto = [localStorage.getItem('carrinho'), localStorage.getItem('cadastro')];
    const [realizarCompra, setRealizarCompra] = useState(false);
    const RealizarCompra = () => {
        console.log('Compra Realizada com Sucesso');
        setRealizarCompra(true);
        console.table(dadosPedidoCompleto);
        if (localStorage.getItem('dados do pedido') != null) {
            localStorage.setItem(
                'dados do pedido',
                // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem('dados do pedido')),
                    dadosPedidoCompleto
                ])
            );
        } else {
            localStorage.setItem('dados do pedido', JSON.stringify([dadosPedidoCompleto]));
        }

        localStorage.removeItem('carrinho');
        localStorage.removeItem('cadastro');
    }
    if (realizarCompra) {
        return (
            <Card className={classes.root1} variant="outlined">
                <CardContent>
                    <Avatar alt="Sucesso" src="https://acegif.com/wp-content/uploads/funny-celebrate-35.gif" className={classes.largeImg} />
                </CardContent>
                <CardHeader title="Agora só esperar chegar..." className={classes.title} />
                <CardActions>
                    <Link to='/' className={classes.link}>
                        <Button variant="outlined" size="medium" className={classes.button} > Continuar Navegando....</Button>
                    </Link>

                </CardActions>
            </Card>
        );
    } else
        return (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Avatar alt="Sucesso" src="https://acegif.com/wp-content/uploads/funny-celebrate-56.gif" className={classes.largeImg} />
                </CardContent>
                <CardHeader title="Cadastro Realizado com Sucesso" className={classes.title} />
                <CardActions>
                    {/* <Link to='/DadosCompra' className={classes.link}> */}
                    <Button variant="outlined" size="medium" className={classes.button} onClick={() => RealizarCompra()}>Realizar compra</Button>
                    {/* </Link> */}

                </CardActions>
            </Card>
        );
}
