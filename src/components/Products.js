import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {GlassMagnifier} from "react-image-magnifiers";
import dataJson from '../static/zapato.json'
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Products() {
    const [data, setData] = useState(dataJson);
    const [selected, setSelected] = useState();
    const [hide, setHide] = useState(false);
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

    const onRowClick = nombre => () => {
        const index = data.findIndex(data => data.nombre === nombre);
        const row = data[index]
        setSelected(data[index]) /*Añade al estado la fila seleccionada*/
        setHide(true);
    }
  return (
    <>
        <Typography variant="h4" gutterBottom>
            Promociones
        </Typography>
        <Grid container spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >

            {hide && 
                (
                    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={10} md={4} lg={3}>
                            <GlassMagnifier
                                imageSrc={`https://raw.githubusercontent.com/juanpfrancos/store_template/main/src/static/img/r${selected.foto}`}
                                imageAlt={selected.referencia}
                                largeImageSrc={`https://raw.githubusercontent.com/juanpfrancos/store_template/main/src/static/img/${selected.foto}`}
                            />
                        </Grid>
                        <Grid item xs={10} md={4} lg={3}>
                            <Box sx={{ width: '100%'}}>
                            <Typography variant="h3" gutterBottom component="div">
                                {selected.nombre}
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div">
                            $ {selected.precio}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Referencia: {selected.referencia}
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                Tallas
                            </Typography>
                                <Grid container spacing={2}
                                    direction="row"
                                    justifyContent="flex-star"
                                    alignItems="center"
                                >
                                    <Grid item xs={2}>
                                    <Item>5</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                    <Item>5.5</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                    <Item>6</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                    <Item>6.5</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                    <Item>7</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                    <Item>7.5</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                    <Item>8</Item>
                                    </Grid>
                                    <Grid item xs={2}>
                                    <Item>8.5</Item>
                                    </Grid>
                                </Grid>
                                <br/>
                                <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>Añadir al carrito</Button>
                            </Box>

                        </Grid>
                    </Grid>
                )
            }


            {
            data.map( item => (
                    <Grid item xs={8} md={4} lg={3} key={item.nombre}>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea onClick={onRowClick(item.nombre)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`https://raw.githubusercontent.com/juanpfrancos/store_template/main/src/static/img/r${item.foto}`}
                                    alt={item.nombre}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.nombre}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                $ {item.precio}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Referencia: {item.referencia}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>    
     </> 
    )}
