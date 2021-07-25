import { React, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { ImageList, Button, Avatar } from '@material-ui/core/';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { Send } from '@material-ui/icons/';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'none',
        height: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: '90vw',
        height: 'auto',
        overflow: 'auto',
    },
    icon: {
        color: 'red',
        backgroundCcolor: 'black',
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
    cardAviso: {
        minWidth: 275,
        backgroundColor: '#000',
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    largeImg: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginTop: '3rem'
    },
}));



export default function Carrinho() {
    const classes = useStyles();
    const isRowBased = useMediaQuery('(max-width: 600px)');
    const [itemData, setItemData] = useState(JSON.parse(localStorage.getItem('carrinho')));
    console.table(itemData);

    const removerDoCarrinho = (produto) => {
        const data = itemData.filter(item => item.id !== produto.id);
        setItemData(data);
        console.table(data);
        localStorage.setItem('carrinho', JSON.stringify(data))
    }

    if (itemData == null) {
        return (
            <Card className={classes.cardAviso} variant="outlined">
                <CardContent>
                    <Avatar alt="alerta não comprou nada" src="https://media3.giphy.com/media/z2D26GunfUK1W/giphy.gif" className={classes.largeImg} />
                </CardContent>
                <CardHeader title="Você ainda não adicionou nada ao carrinho..." className={classes.title} />
                <CardActions>
                    <Link to='/' className={classes.link}>
                        <Button variant="outlined" size="medium" className={classes.button} > Partiu Compras....</Button>
                    </Link>

                </CardActions>
            </Card>
        );
    }
    else return (
        <>
            <h1>Produtos do Carrinho</h1>
            <div className={classes.root}>

                <ImageList rowHeight={isRowBased ? 180 : 280} className={classes.imageList} cols={isRowBased ? 2 : 3} >
                    {itemData.map((item) => (
                        <ImageListItem key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={<span>Preço: {item.preco}</span>}
                                onClick={() => removerDoCarrinho(item)}
                                actionIcon={
                                    <IconButton aria-label={`info about ${item.title}`} className={classes.icon} >
                                        <RemoveCircleIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <div className={classes.buttonContent}>
                    <Link to='/Cadastro' className={classes.link}>
                        <Button type='submit' variant="outlined" size="medium" className={classes.button} endIcon={<Send />}>
                            Confirmar Pedido
                        </Button>
                    </Link>

                </div>
            </div>

        </>
    );
}