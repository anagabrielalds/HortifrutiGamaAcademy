import React from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'none',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: '90vw',
        height: '90vh',
        overflow: 'inherit',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const itemData = [
    {
        id: 1,
        img: 'https://hortapurper.com.br/wp-content/uploads/2018/10/ALFACE2-300x300.png',
        title: 'Alface Americana',
        preco: 'R$ 3,00 Unidade',
    },
    {
        id: 2,
        img: 'https://hortapurper.com.br/wp-content/uploads/2018/10/tomatelongavida.png',
        title: 'Tomate',
        preco: 'R$ 8,00 KG',
    },
    {
        id: 3,
        img: 'https://hortapurper.com.br/wp-content/uploads/2018/10/beterrabamolho.png',
        title: 'Beterraba',
        preco: 'R$ 7,00 KG',
    },
    {
        id: 4,
        img: 'https://hortapurper.com.br/wp-content/uploads/2018/10/abobrinha_2.jpg',
        title: 'Abobrinha',
        preco: 'R$ 6,00 KG',
    },
    {
        id: 5,
        img: 'https://hortapurper.com.br/wp-content/uploads/2018/10/berinjela-300x300.png',
        title: 'Beringela',
        preco: 'R$ 4,00 Unidade',
    },
    {
        id: 6,
        img: 'https://hortapurper.com.br/wp-content/uploads/2018/10/BROCOLIS-COMUM-300x300.png',
        title: 'Brócolis Comum',
        preco: 'R$ 3,50 Unidade ',
    },
    {
        id: 7,
        img: 'https://hortapurper.com.br/wp-content/uploads/2018/10/CEBOLA-300x300.png',
        title: 'Cebola',
        preco: 'R$ 1,00 Undiade',
    },
    {
        id: 8,
        img: 'https://hortapurper.com.br/wp-content/uploads/2020/08/cenouraind-300x300.png',
        title: 'Cenoura',
        preco: 'R$ 1,50 Unidade ',
    },
    {
        id: 9,
        img: 'https://hortapurper.com.br/wp-content/uploads/2018/10/rabanetes-300x246.png',
        title: 'Rabanete',
        preco: 'R$ 4,00 Undiade',
    },
];

export default function Produtos() {
    const classes = useStyles();
    const isRowBased = useMediaQuery('(max-width: 600px)');

    const adicionarAoCarrinho = (produto) => {
        let produtosDoCarrinho = JSON.parse(localStorage.getItem('carrinho'));

        console.log(produtosDoCarrinho)
        if (produtosDoCarrinho != null) {
            localStorage.setItem(
                'carrinho',
                // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem('carrinho')),
                    produto
                ])
            );

        } else {
            localStorage.setItem('carrinho', JSON.stringify([produto]));
        }
        console.table(JSON.parse(localStorage.getItem(produto)));
    }

    return (
        <div className={classes.root}>
            <ImageList rowHeight={isRowBased ? 180 : 280} className={classes.imageList} cols={isRowBased ? 2 : 3} >
                {itemData.map((item) => (
                    <ImageListItem key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>Preço: {item.preco}</span>}
                            onClick={() => adicionarAoCarrinho(item)}
                            actionIcon={
                                <IconButton aria-label={`info about ${item.title}`} className={classes.icon} >
                                    <AddShoppingCartIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}