import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import IceSkatingIcon from '@mui/icons-material/IceSkating';


export default function Header() {
    const sections = [
      { title: 'Hombre', url: '#' },
      { title: 'Mujer', url: '#' },
      { title: 'Blog', url: '#' },
      { title: 'Historia', url: '#' },
    ]
    return(
     <>   
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        
        <Typography
          component="h3"
          variant="h3"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
        <IceSkatingIcon sx={{ fontSize: 40 }}/>
          {'Mi Zapato'}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Iniciar Sesion
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'flex-start',   direction:"row", alignItems:"center", overflowX: 'auto' }}
      >
        {sections.map((section) => (
        <Typography
          component="p"
          variant="p"
          color="inherit"
          align="left"

          key={section.title}
          sx={{ flex: 1 }}
        >
          {section.title}
        </Typography>
        ))}
      </Toolbar>
      </>
    )
}
