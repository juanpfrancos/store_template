import Typography from '@mui/material/Typography';
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'


const IGFeed = () => {
const token = 'IGQVJXdEQwQ0szWmUzdnQ2MThiaGEwTXVvTU42SHVSZAWg1SXFTeG9rTzNWRDFYTEJ6aVhnRjRkVDNfMzVsWVM0cXk3VnJrMUNuNmE2OExsemhzQ21EdzJSLWk0a05jbElNTVU1TWVwVW5RUjZASYkFicAZDZD'
    return (
    <>
        <Typography variant="h4" gutterBottom>
            Síguenos en Instagram
        </Typography>
         <InstagramFeed token={token}  counter="6"/>
    </>

  );
};

export default IGFeed