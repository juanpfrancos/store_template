import React, { useState} from "react";
import Grid from '@mui/material/Grid';
import Products from './components/Products'
import Header from './components/Header'
import Slider from './components/Slider'
import IGFeed from './components/IGFeed'
import HomeGrids from "./components/HomeGrids";
function App() {
  const [hideslide, setHide] = useState(true);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Header/>
          <Slider/>      
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <IGFeed/>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Products/>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          
        </Grid>
      </Grid>

    </>
  );
}

/*

xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px

*/
export default App;
