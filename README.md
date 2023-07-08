# Consumo de API con React
## Instalación Vite, React y MUI
```
npm create vite@latest
npm install
npm run dev
```
```
npm i axios
```
## What is MUI?
Material UI is an open-source React component library that implements Google's Material Design.
## MUI Instalación
```
npm install @mui/material @emotion/react @emotion/styled
```
```
npm i @mui/icons-material
```
## Instalación MUI Navbar Component

```
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar({pokemonFilter}) {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: "1em" }}>
            <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Box component="img" src="/assets/pokeapi.svg" height="3em" />
                        <Search onChange={(e) => pokemonFilter(e.target.value)}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}      
```
## Instalacion Card Component
```
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, DialogContent } from '@mui/material';
import { Gradient } from '@mui/icons-material';

export default function PokemonCard({ name, image, types }) {
    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
    };

return (
        
        <Card sx={{ maxWidth: 345, "& :hover":{
            background: 'linear-gradient(45deg,#AE64F3 20%, #0C00FF 90%)'}
            }} >
            <CardActionArea>
                <CardMedia component="img" height="200"  image={image} alt="green iguana" />
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <br />
                    <Typography gutterBottom variant="caption" component="div">
                        {typeHandler()}
                    </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
```
## Pages Component
```
export default function PokemonCard({ name, image, types }) {
    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
    };

return (
        <Card sx={{ maxWidth: 345, "& :hover":{
            background: 'linear-gradient(45deg,#AE64F3 20%, #0C00FF 90%)'}
            }} >
            <CardActionArea>
                <CardMedia component="img" height="200"  image={image} alt="green iguana" />
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <br />
                    <Typography gutterBottom variant="caption" component="div">
                        {typeHandler()}
                    </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}       
```
