import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 'auto',
    padding: '0 30px',
    backgroundImage: `url(https://calzadolacorola.com/wp-content/uploads/2020/12/banner-z.jpg)`
  },
});




export default function HomeGrids() {
    const classes = useStyles();
    return(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid paper xs={12} md={12}>
          <Paper >
            <img src="https://calzadolacorola.com/wp-content/uploads/2020/12/banner-z.jpg" alt="MDN"/>
          </Paper>
        </Grid>
        <Grid paper xs={12} md={12}>
            <img src="https://i.ibb.co/n7qZ3SY/banner-z.png" alt="MDN"/>
        </Grid>
      </Grid>
    </Box>
    )
}
