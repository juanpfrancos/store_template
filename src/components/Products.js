import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import {GlassMagnifier} from "react-image-magnifiers";
import dataJson from '../static/zapato.json'

export default function Products() {
    const [data, setData] = useState(dataJson);
    const [selected, setSelected] = useState();
    const [hide, setHide] = useState(false);

    const onRowClick = nombre => () => {
        const index = data.findIndex(data => data.nombre === nombre);
        const row = data[index]
        setSelected(data[index]) /*Añade al estado la fila seleccionada*/
        setHide(true);
    }
  return (
    <Grid container spacing={2}>
        {hide && 
            (
            <Grid item xs={12} md={12} lg={12}>
                <GlassMagnifier
                    imageSrc={`https://raw.githubusercontent.com/juanpfrancos/store_template/main/src/static/img/r${selected.foto}`}
                    imageAlt={selected.referencia}
                    largeImageSrc={`https://raw.githubusercontent.com/juanpfrancos/store_template/main/src/static/img/${selected.foto}`}
                />
            </Grid>
            )
        }


        {
           data.map( item => (
                <Grid item xs={3} md={3} lg={3}>
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
    )}
