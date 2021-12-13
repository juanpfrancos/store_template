import './App.css';
import Grid from '@mui/material/Grid';
import Products from './components/Products'

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8} md={12} lg={12}>
          
        </Grid>
        <Grid item xs={4} md={12} lg={12}>
          <Products/>
        </Grid>
        <Grid item xs={4} md={12} lg={12}>
          
        </Grid>
        <Grid item xs={8} md={12} lg={12}>
          
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
