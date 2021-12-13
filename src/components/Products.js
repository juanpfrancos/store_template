import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from "react";
import dataJson from '../static/zapato.json'

export default function Products() {
    const [data, setData] = useState(dataJson);

  return (
    <Grid container spacing={2}>
        {
           data.map( item => (
                <Grid item xs={3} md={3} lg={3}>
                    <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d5f168f9-f953-4419-ac7a-f0def128176e/renew-run-2-road-running-shoe-z8BVXH.png"
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
