import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { Visibility } from '@material-ui/icons/Visibility';
import { Send } from '@material-ui/icons/';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Button } from '@material-ui/core';
import ResultadoSubmit from './ResultadoSubmit';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '20rem',
    },
    buttonContent: {
        display: 'flex',
        alignItems: 'center',

    },
    button: {
        backgroundColor: '#c9f8a6',
        textAlign: 'center',
        width: '25rem'
    },
}));

export default function Formulario() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        nome: '',
        idade: '',
        telefone: '',
        cidade: '',
        bairro: '',
        complemento: '',
        rua: '',
        email: '',
        senha: '',
        mostrarSenha: false,
        resultadoSubmit: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, mostrarSenha: !values.mostrarSenha });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const submitForm = (event) => {
        event.preventDefault();
        console.log(values);
        setValues({ ...values, resultadoSubmit: !values.resultadoSubmit });
        localStorage.setItem('cadastro', JSON.stringify(values));
    }
    if (values.resultadoSubmit) {
        return (
            <ResultadoSubmit />
        );
    } else
        return (

            <div className={classes.root}>
                <form onSubmit={submitForm}>
                    <div>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="nome">Nome</InputLabel>
                            <OutlinedInput
                                id="nome"
                                value={values.nome}
                                onChange={handleChange('nome')}
                                labelWidth={60}
                            />
                        </FormControl>

                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="idade">Idade</InputLabel>
                            <OutlinedInput
                                id="idade"
                                value={values.idade}
                                onChange={handleChange('idade')}
                                labelWidth={60}
                                type="number"
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="telefone">Telefone</InputLabel>
                            <OutlinedInput
                                id="telefone"
                                value={values.telefone}
                                onChange={handleChange('telefone')}
                                labelWidth={70}
                                type="tel"
                            />
                        </FormControl>
                    </div>

                    <div>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="cidade">Cidade</InputLabel>
                            <OutlinedInput
                                id="cidade"
                                value={values.cidade}
                                onChange={handleChange('cidade')}
                                labelWidth={70}
                                type="text"
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="bairro">Bairro</InputLabel>
                            <OutlinedInput
                                id="bairro"
                                value={values.bairro}
                                onChange={handleChange('bairro')}
                                labelWidth={70}
                                type="text"
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="complemento">Complemento</InputLabel>
                            <OutlinedInput
                                id="complemento"
                                value={values.complemento}
                                onChange={handleChange('complemento')}
                                labelWidth={100}
                                type="text"
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput
                                id="email"
                                value={values.email}
                                onChange={handleChange('email')}
                                labelWidth={70}
                                type="email"
                            />
                        </FormControl>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <InputLabel htmlFor="senha">Senha</InputLabel>
                            <OutlinedInput
                                id="senha"
                                type={values.mostrarSenha ? 'text' : 'password'}
                                value={values.senha}
                                onChange={handleChange('senha')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.mostrarSenha ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>

                    </div>
                    <FormControl className={classes.buttonContent}>
                        <Button type='submit' variant="outlined" size="medium" className={classes.button} endIcon={<Send />}>
                            Save
                        </Button>
                    </FormControl>
                </form>
            </div>


        );
}
