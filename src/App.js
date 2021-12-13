import React, { useState} from "react";
import Grid from '@mui/material/Grid';
import Products from './components/Products'
import Header from './components/Header'
import Slider from './components/Slider'
function App() {
  const [hideslide, setHide] = useState(true);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Header/>
          {hideslide && (<Slider/>)}
          
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Products setHideSlide={setHide}/>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          
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
