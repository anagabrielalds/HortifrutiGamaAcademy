import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import {Link } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    menu: {
        backgroundColor: '#c9f8a6',
        marginBottom: '5px;',
        color: 'black'
    },
    link:{
        textDecoration:'none',
        color:'black'
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

    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" className={classes.menu}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Avatar alt="Gama Academy" src="https://miro.medium.com/fit/c/160/160/1*EGF3tCyOPIiYy3zfyg8HpA.png" />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Hortifruti da Gama Academy
                        </Typography>
                        <Link to='/' className={classes.link}><Button color="inherit">Home</Button></Link>
                        <Link to='/Carrinho' className={classes.link}><Button color="inherit" >Carrinho</Button></Link>
                        <Link to='/Cadastro' className={classes.link}><Button color="inherit" > Cadastro</Button></Link>

                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}
